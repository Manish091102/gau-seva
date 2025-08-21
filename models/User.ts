import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  name: string
  mobile: string
  state: string
  district: string
  photo?: string
  membershipNumber: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    unique: true,
    match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number']
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    trim: true
  },
  district: {
    type: String,
    required: [true, 'district is required'],
    trim: true
  },
  photo: {
    type: String,
    required: false
  },
  membershipNumber: {
    type: String,
    required: false,
    unique: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

// Generate membership number before validation so it exists for required checks
UserSchema.pre('validate', function(next) {
  if (this.isNew && !this.membershipNumber) {
    const prefix = "GS"
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0")
    this.membershipNumber = `${prefix}${timestamp}${random}`
  }
  next()
})

// Ensure model can be recompiled during dev hot-reloads
if (mongoose.models.User) {
  delete mongoose.models.User
}

export default mongoose.model<IUser>('User', UserSchema)