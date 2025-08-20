const express = require("express")
const router = express.Router()
const db = require("../config/database")
const { successResponse, errorResponse } = require("../utils/helpers")

// Verify membership by membership number
router.get("/:membershipNumber", async (req, res) => {
  try {
    const { membershipNumber } = req.params

    if (!membershipNumber) {
      return errorResponse(res, "Membership number is required", 400)
    }

    // Find membership card
    const membershipCard = db.getMembershipCardByNumber(membershipNumber)

    if (!membershipCard) {
      return errorResponse(res, "Membership not found", 404)
    }

    // Get user details
    const user = db.getUserById(membershipCard.userId)

    if (!user || !user.isActive) {
      return errorResponse(res, "Membership is inactive or user not found", 404)
    }

    // Check if membership is still valid
    const now = new Date()
    const validUntil = new Date(membershipCard.validUntil)

    const isValid = now <= validUntil

    successResponse(res, {
      membershipNumber: membershipCard.membershipNumber,
      name: membershipCard.name,
      state: membershipCard.state,
      photo: membershipCard.photo,
      issueDate: membershipCard.issueDate,
      validUntil: membershipCard.validUntil,
      isValid,
      status: isValid ? "Active" : "Expired",
      verifiedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Verify membership error:", error)
    errorResponse(res, "Failed to verify membership", 500, error.message)
  }
})

// Bulk verify multiple memberships
router.post("/bulk", async (req, res) => {
  try {
    const { membershipNumbers } = req.body

    if (!Array.isArray(membershipNumbers) || membershipNumbers.length === 0) {
      return errorResponse(res, "Array of membership numbers is required", 400)
    }

    const results = []

    for (const membershipNumber of membershipNumbers) {
      const membershipCard = db.getMembershipCardByNumber(membershipNumber)

      if (membershipCard) {
        const user = db.getUserById(membershipCard.userId)
        const now = new Date()
        const validUntil = new Date(membershipCard.validUntil)
        const isValid = now <= validUntil && user && user.isActive

        results.push({
          membershipNumber,
          found: true,
          isValid,
          name: membershipCard.name,
          state: membershipCard.state,
          status: isValid ? "Active" : "Expired",
        })
      } else {
        results.push({
          membershipNumber,
          found: false,
          isValid: false,
          status: "Not Found",
        })
      }
    }

    successResponse(res, { results, total: results.length })
  } catch (error) {
    console.error("Bulk verify error:", error)
    errorResponse(res, "Failed to verify memberships", 500, error.message)
  }
})

// Get verification statistics
router.get("/stats/overview", async (req, res) => {
  try {
    const allData = db.getAllData()
    const now = new Date()

    const stats = {
      totalMemberships: allData.membershipCards.length,
      activeMemberships: allData.membershipCards.filter((card) => {
        const validUntil = new Date(card.validUntil)
        const user = allData.users.find((u) => u.id === card.userId)
        return now <= validUntil && user && user.isActive
      }).length,
      expiredMemberships: allData.membershipCards.filter((card) => {
        const validUntil = new Date(card.validUntil)
        return now > validUntil
      }).length,
      inactiveUsers: allData.users.filter((user) => !user.isActive).length,
    }

    successResponse(res, stats)
  } catch (error) {
    console.error("Get verification stats error:", error)
    errorResponse(res, "Failed to get verification statistics", 500, error.message)
  }
})

module.exports = router
