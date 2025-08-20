const bcrypt = require("bcryptjs")
const QRCode = require("qrcode")

// Password hashing
const hashPassword = async (password) => {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

// OTP generation
const generateOTP = () => {
  // For testing, always return 123456
  // In production, generate random 6-digit OTP
  return "123456"
  // return Math.floor(100000 + Math.random() * 900000).toString()
}

// QR Code generation
const generateQRCode = async (data) => {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(data, {
      width: 200,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    })
    return qrCodeDataURL
  } catch (error) {
    console.error("Error generating QR code:", error)
    throw new Error("Failed to generate QR code")
  }
}

// SMS sending (mock implementation)
const sendSMS = async (mobile, message) => {
  // Mock SMS sending - in production, integrate with SMS provider
  console.log(`📱 SMS to ${mobile}: ${message}`)

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    messageId: `msg_${Date.now()}`,
    message: "SMS sent successfully",
  }
}

// File upload helpers
const validateImageFile = (file) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"]
  const maxSize = 5 * 1024 * 1024 // 5MB

  if (!allowedTypes.includes(file.mimetype)) {
    throw new Error("Invalid file type. Only JPEG, PNG, and GIF are allowed.")
  }

  if (file.size > maxSize) {
    throw new Error("File size too large. Maximum size is 5MB.")
  }

  return true
}

// Response helpers
const successResponse = (res, data, message = "Success", statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  })
}

const errorResponse = (res, message = "Error", statusCode = 400, error = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: process.env.NODE_ENV === "development" ? error : null,
  })
}

module.exports = {
  hashPassword,
  comparePassword,
  generateOTP,
  generateQRCode,
  sendSMS,
  validateImageFile,
  successResponse,
  errorResponse,
}
