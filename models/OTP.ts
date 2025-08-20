import mongoose, { Document, Schema } from 'mongoose'

export interface IOTP extends Document {
  mobile: string
  otp: string
  expiresAt: Date
  attempts: number
  createdAt: Date
}

const OTPSchema = new Schema<IOTP>({
  mobile: {
    type: String,
    required: true,
    index: true
  },
  otp: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  },
  attempts: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

// Create index for automatic cleanup of expired OTPs
OTPSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

export default mongoose.models.OTP || mongoose.model<IOTP>('OTP', OTPSchema) 