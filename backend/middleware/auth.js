const jwt = require("jsonwebtoken")
const db = require("../config/database")

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1] // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ message: "Access token required" })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" })
    }

    // Get user from database
    const user = db.getUserById(decoded.userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    req.user = user
    next()
  })
}

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" })
}

module.exports = {
  authenticateToken,
  generateToken,
}
