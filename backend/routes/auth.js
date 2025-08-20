const express = require("express")
const router = express.Router()
const db = require("../config/database")
const User = require("../models/User")
const { generateToken, authenticateToken } = require("../middleware/auth")
const { generateOTP, sendSMS, successResponse, errorResponse } = require("../utils/helpers")

// Send OTP
router.post("/send-otp", async (req, res) => {
  try {
    const { mobile } = req.body

    if (!mobile || !/^\d{10}$/.test(mobile)) {
      return errorResponse(res, "Valid 10-digit mobile number is required", 400)
    }

    // Generate OTP (hardcoded as 123456 for testing)
    const otp = generateOTP()

    // Store OTP in database
    db.storeOTP(mobile, otp)

    // Send SMS (mock implementation)
    await sendSMS(mobile, `Your Gau Seva OTP is: ${otp}. Valid for 5 minutes.`)

    successResponse(res, { mobile }, "OTP sent successfully")
  } catch (error) {
    console.error("Send OTP error:", error)
    errorResponse(res, "Failed to send OTP", 500, error.message)
  }
})

// Verify OTP
router.post("/verify-otp", async (req, res) => {
  try {
    console.log("Verify OTP request received")
    const { mobile, otp } = req.body

    if (!mobile || !otp) {
      return errorResponse(res, "Mobile number and OTP are required", 400)
    }

    // Accept static OTP 123456 for testing
    const staticOTP = "123456"
    const isValidOTP = otp === staticOTP || db.verifyOTP(mobile, otp)

    if (!isValidOTP) {
      return errorResponse(res, "Invalid or expired OTP", 400)
    }

    successResponse(res, { mobile, verified: true }, "OTP verified successfully")
  } catch (error) {
    console.error("Verify OTP error:", error)
    errorResponse(res, "Failed to verify OTP", 500, error.message)
  }
})

// User Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, mobile, state, photo } = req.body

    // Validate input
    const validation = User.validate({ name, mobile, state, photo })
    if (!validation.isValid) {
      return errorResponse(res, "Validation failed", 400, validation.errors)
    }

    // Check if user already exists
    const existingUser = db.getUserByMobile(mobile)
    if (existingUser) {
      return errorResponse(res, "User with this mobile number already exists", 409)
    }

    // Generate membership number
    const membershipNumber = db.generateMembershipNumber()

    // Create user
    const userData = {
      name: name.trim(),
      mobile,
      state: state.trim(),
      photo,
      membershipNumber,
    }

    const user = db.createUser(userData)

    // Create membership card
    const cardData = {
      membershipNumber,
      name: user.name,
      state: user.state,
      mobile: user.mobile,
      photo: user.photo,
      issueDate: new Date().toISOString(),
      validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
    }

    db.createMembershipCard(user.id, cardData)

    // Generate JWT token
    const token = generateToken(user.id)

    successResponse(
      res,
      {
        user: new User(user).toJSON(),
        token,
        membershipCard: cardData,
      },
      "User registered successfully",
      201,
    )
  } catch (error) {
    console.error("Signup error:", error)
    errorResponse(res, "Failed to create user", 500, error.message)
  }
})

// User Login
router.post("/login", async (req, res) => {
  try {
    const { mobile, password } = req.body

    if (!mobile) {
      return errorResponse(res, "Mobile number is required", 400)
    }

    // Find user by mobile
    const user = db.getUserByMobile(mobile)
    if (!user) {
      return errorResponse(res, "User not found", 404)
    }

    // For demo purposes, we'll allow login without password
    // In production, implement proper password verification

    // Generate JWT token
    const token = generateToken(user.id)

    // Get membership card
    const membershipCard = db.getMembershipCardByUserId(user.id)

    successResponse(res, {
      user: new User(user).toJSON(),
      token,
      membershipCard,
    })
  } catch (error) {
    console.error("Login error:", error)
    errorResponse(res, "Login failed", 500, error.message)
  }
})

// Get current user profile
router.get("/profile", authenticateToken, async (req, res) => {
  try {
    const user = req.user
    const membershipCard = db.getMembershipCardByUserId(user.id)

    successResponse(res, {
      user: new User(user).toJSON(),
      membershipCard,
    })
  } catch (error) {
    console.error("Profile error:", error)
    errorResponse(res, "Failed to get profile", 500, error.message)
  }
})

// Update user profile
router.put("/profile", authenticateToken, async (req, res) => {
  try {
    const { name, state, photo } = req.body
    const userId = req.user.id

    const updates = {}
    if (name) updates.name = name.trim()
    if (state) updates.state = state.trim()
    if (photo) updates.photo = photo

    const updatedUser = db.updateUser(userId, updates)
    if (!updatedUser) {
      return errorResponse(res, "User not found", 404)
    }

    successResponse(res, { user: new User(updatedUser).toJSON() }, "Profile updated successfully")
  } catch (error) {
    console.error("Update profile error:", error)
    errorResponse(res, "Failed to update profile", 500, error.message)
  }
})

module.exports = router
