// In-memory database for demo purposes
// In production, replace with actual database (MongoDB, PostgreSQL, etc.)

class InMemoryDB {
  constructor() {
    this.users = new Map()
    this.otpStore = new Map()
    this.membershipCards = new Map()
  }

  // User operations
  createUser(userData) {
    const userId = this.generateId()
    const user = {
      id: userId,
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    this.users.set(userId, user)
    return user
  }

  getUserById(id) {
    return this.users.get(id)
  }

  getUserByMobile(mobile) {
    for (const user of this.users.values()) {
      if (user.mobile === mobile) {
        return user
      }
    }
    return null
  }

  updateUser(id, updates) {
    const user = this.users.get(id)
    if (user) {
      const updatedUser = {
        ...user,
        ...updates,
        updatedAt: new Date().toISOString(),
      }
      this.users.set(id, updatedUser)
      return updatedUser
    }
    return null
  }

  // OTP operations
  storeOTP(mobile, otp) {
    this.otpStore.set(mobile, {
      otp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
    })
  }

  verifyOTP(mobile, otp) {
    const otpData = this.otpStore.get(mobile)
    if (!otpData) return false

    if (Date.now() > otpData.expiresAt) {
      this.otpStore.delete(mobile)
      return false
    }

    const isValid = otpData.otp === otp
    if (isValid) {
      this.otpStore.delete(mobile)
    }
    return isValid
  }

  // Membership card operations
  createMembershipCard(userId, cardData) {
    const cardId = this.generateId()
    const card = {
      id: cardId,
      userId,
      ...cardData,
      createdAt: new Date().toISOString(),
    }
    this.membershipCards.set(cardId, card)
    return card
  }

  getMembershipCardByUserId(userId) {
    for (const card of this.membershipCards.values()) {
      if (card.userId === userId) {
        return card
      }
    }
    return null
  }

  getMembershipCardByNumber(membershipNumber) {
    for (const card of this.membershipCards.values()) {
      if (card.membershipNumber === membershipNumber) {
        return card
      }
    }
    return null
  }

  // Utility methods
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  generateMembershipNumber() {
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0")
    return `GS${timestamp}${random}`
  }

  // Get all data (for debugging)
  getAllData() {
    return {
      users: Array.from(this.users.values()),
      otpStore: Array.from(this.otpStore.entries()),
      membershipCards: Array.from(this.membershipCards.values()),
    }
  }
}

// Create singleton instance
const db = new InMemoryDB()

module.exports = db
