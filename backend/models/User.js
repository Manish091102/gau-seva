// User model for in-memory database
// In production, replace with actual database model (Mongoose, Sequelize, etc.)

class User {
  constructor(userData) {
    this.id = userData.id
    this.name = userData.name
    this.mobile = userData.mobile
    this.state = userData.state
    this.photo = userData.photo
    this.membershipNumber = userData.membershipNumber
    this.isActive = userData.isActive || true
    this.createdAt = userData.createdAt || new Date().toISOString()
    this.updatedAt = userData.updatedAt || new Date().toISOString()
  }

  // Convert to JSON (remove sensitive data)
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      mobile: this.mobile,
      state: this.state,
      photo: this.photo,
      membershipNumber: this.membershipNumber,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }

  // Validation
  static validate(userData) {
    const errors = []

    if (!userData.name || userData.name.trim().length < 2) {
      errors.push("Name must be at least 2 characters long")
    }

    if (!userData.mobile || !/^\d{10}$/.test(userData.mobile)) {
      errors.push("Mobile number must be 10 digits")
    }

    if (!userData.state || userData.state.trim().length < 2) {
      errors.push("State is required")
    }

    if (!userData.photo) {
      errors.push("Photo is required")
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }
}

module.exports = User
