const express = require("express")
const router = express.Router()
const db = require("../config/database")
const { authenticateToken } = require("../middleware/auth")
const { successResponse, errorResponse } = require("../utils/helpers")

// Get all users (admin only)
router.get("/users", authenticateToken, async (req, res) => {
  try {
    // In production, add admin role check here
    const allData = db.getAllData()

    const users = allData.users.map((user) => ({
      id: user.id,
      name: user.name,
      mobile: user.mobile,
      state: user.state,
      membershipNumber: user.membershipNumber,
      isActive: user.isActive,
      createdAt: user.createdAt,
    }))

    successResponse(res, { users, total: users.length })
  } catch (error) {
    console.error("Get all users error:", error)
    errorResponse(res, "Failed to get users", 500, error.message)
  }
})

// Get all membership cards (admin only)
router.get("/memberships", authenticateToken, async (req, res) => {
  try {
    // In production, add admin role check here
    const allData = db.getAllData()

    successResponse(res, {
      memberships: allData.membershipCards,
      total: allData.membershipCards.length,
    })
  } catch (error) {
    console.error("Get all memberships error:", error)
    errorResponse(res, "Failed to get memberships", 500, error.message)
  }
})

// Deactivate user (admin only)
router.put("/users/:userId/deactivate", authenticateToken, async (req, res) => {
  try {
    // In production, add admin role check here
    const { userId } = req.params

    const updatedUser = db.updateUser(userId, { isActive: false })
    if (!updatedUser) {
      return errorResponse(res, "User not found", 404)
    }

    successResponse(res, { user: updatedUser }, "User deactivated successfully")
  } catch (error) {
    console.error("Deactivate user error:", error)
    errorResponse(res, "Failed to deactivate user", 500, error.message)
  }
})

// Get system statistics (admin only)
router.get("/stats", authenticateToken, async (req, res) => {
  try {
    // In production, add admin role check here
    const allData = db.getAllData()
    const now = new Date()

    const stats = {
      totalUsers: allData.users.length,
      activeUsers: allData.users.filter((user) => user.isActive).length,
      totalMemberships: allData.membershipCards.length,
      activeMemberships: allData.membershipCards.filter((card) => {
        const validUntil = new Date(card.validUntil)
        const user = allData.users.find((u) => u.id === card.userId)
        return now <= validUntil && user && user.isActive
      }).length,
      newUsersToday: allData.users.filter((user) => {
        const userDate = new Date(user.createdAt)
        return (
          userDate.getDate() === now.getDate() &&
          userDate.getMonth() === now.getMonth() &&
          userDate.getFullYear() === now.getFullYear()
        )
      }).length,
      newUsersThisWeek: allData.users.filter((user) => {
        const userDate = new Date(user.createdAt)
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        return userDate >= weekAgo
      }).length,
    }

    successResponse(res, stats)
  } catch (error) {
    console.error("Get admin stats error:", error)
    errorResponse(res, "Failed to get statistics", 500, error.message)
  }
})

module.exports = router
