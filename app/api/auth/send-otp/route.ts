import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import OTP from "@/models/OTP"

interface SendOtpRequest {
  mobile: string
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    
    const body: SendOtpRequest = await request.json()
    const { mobile } = body

    // Validate mobile number
    if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json({ error: "Invalid mobile number" }, { status: 400 })
    }

    // Check rate limiting (max 3 attempts per mobile per hour)
    const existing = await OTP.findOne({ mobile })
    // if (existing && existing.attempts >= 3 && new Date() < existing.expiresAt) {
    //   return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 })
    // }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    // Store OTP with 10-minute expiry
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
    const attempts = existing ? existing.attempts + 1 : 1

    // Delete existing OTP if any
    if (existing) {
      await OTP.deleteOne({ mobile })
    }

    // Create new OTP
    const newOtp = new OTP({
      mobile,
      otp,
      expiresAt,
      attempts
    })

    await newOtp.save()

    // In production, integrate with SMS service like Twilio, AWS SNS, etc.
    console.log(`OTP for ${mobile}: ${otp}`) // For demo purposes

    // Simulate SMS sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully",
      // In production, don't send OTP in response
      otp: process.env.NODE_ENV === "development" ? otp : undefined,
    })
  } catch (error) {
    console.error("Send OTP error:", error)
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 })
  }
}
