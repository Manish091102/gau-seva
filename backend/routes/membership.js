const express = require("express")
const router = express.Router()
const db = require("../config/database")
const { authenticateToken } = require("../middleware/auth")
const { generateQRCode, successResponse, errorResponse } = require("../utils/helpers")

// Get user's membership card
router.get("/card", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id
    const user = req.user

    // Get membership card
    let membershipCard = db.getMembershipCardByUserId(userId)

    if (!membershipCard) {
      // Create membership card if it doesn't exist
      const membershipNumber = db.generateMembershipNumber()
      const cardData = {
        membershipNumber,
        name: user.name,
        state: user.state,
        mobile: user.mobile,
        photo: user.photo,
        issueDate: new Date().toISOString(),
        validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
      }

      membershipCard = db.createMembershipCard(userId, cardData)

      // Update user with membership number
      db.updateUser(userId, { membershipNumber })
    }

    // Generate QR code for verification
    const verificationUrl = `${process.env.FRONTEND_URL || "http://localhost:3000"}/verify/${
      membershipCard.membershipNumber
    }`
    const qrCode = await generateQRCode(verificationUrl)

    successResponse(res, {
      ...membershipCard,
      qrCode,
      verificationUrl,
    })
  } catch (error) {
    console.error("Get membership card error:", error)
    errorResponse(res, "Failed to get membership card", 500, error.message)
  }
})

// Download membership card (returns card data for frontend to generate image)
router.get("/card/download", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id
    const membershipCard = db.getMembershipCardByUserId(userId)

    if (!membershipCard) {
      return errorResponse(res, "Membership card not found", 404)
    }

    // Generate QR code
    const verificationUrl = `${process.env.FRONTEND_URL || "http://localhost:3000"}/verify/${
      membershipCard.membershipNumber
    }`
    const qrCode = await generateQRCode(verificationUrl)

    // Return card data for frontend to generate image
    successResponse(res, {
      cardData: {
        ...membershipCard,
        qrCode,
        organizationName: "GAU SEVA",
        organizationAddress: "Serving Cows, Serving Humanity",
        cardType: "MEMBERSHIP CARD",
      },
    })
  } catch (error) {
    console.error("Download membership card error:", error)
    errorResponse(res, "Failed to download membership card", 500, error.message)
  }
})

// Get membership statistics
router.get("/stats", authenticateToken, async (req, res) => {
  try {
    const allData = db.getAllData()

    const stats = {
      totalMembers: allData.users.length,
      activeMembers: allData.users.filter((user) => user.isActive).length,
      cardsIssued: allData.membershipCards.length,
      joinedThisMonth: allData.users.filter((user) => {
        const userDate = new Date(user.createdAt)
        const now = new Date()
        return userDate.getMonth() === now.getMonth() && userDate.getFullYear() === now.getFullYear()
      }).length,
    }

    successResponse(res, stats)
  } catch (error) {
    console.error("Get membership stats error:", error)
    errorResponse(res, "Failed to get membership statistics", 500, error.message)
  }
})

module.exports = router
