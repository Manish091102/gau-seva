import { type NextRequest, NextResponse } from "next/server"
import { SignJWT } from "jose"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"
import OTP from "@/models/OTP"

interface LoginRequest {
  mobile: string
  otp: string
}

const JWT_SECRET = new TextEncoder().encode("your-secret-key")

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    
    const body: LoginRequest = await request.json()
    const { mobile, otp } = body

    // Validate input
    if (!mobile || !otp) {
      return NextResponse.json({ error: "Mobile number and OTP are required" }, { status: 400 })
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json({ error: "Invalid mobile number" }, { status: 400 })
    }

    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json({ error: "Invalid OTP format" }, { status: 400 })
    }

    // Check if user exists
    const user = await User.findOne({ mobile })
    if (!user) {
      return NextResponse.json({ error: "User not found. Please sign up first." }, { status: 404 })
    }

    // Accept static OTP 123456 for testing
    const staticOTP = "123456"
    
    // Verify OTP
    if (otp !== staticOTP) {
      const storedOtp = await OTP.findOne({ mobile })
      
      if (!storedOtp) {
        return NextResponse.json({ error: "OTP not found. Please request a new OTP." }, { status: 400 })
      }

      if (new Date() > storedOtp.expiresAt) {
        await OTP.deleteOne({ mobile })
        return NextResponse.json({ error: "OTP has expired. Please request a new OTP." }, { status: 400 })
      }

      if (storedOtp.otp !== otp) {
        // Increment attempts
        await OTP.updateOne({ mobile }, { $inc: { attempts: 1 } })
        return NextResponse.json({ error: "Invalid OTP" }, { status: 400 })
      }

      // OTP is valid, delete it from database
      await OTP.deleteOne({ mobile })
    }

    // Generate JWT token
    const token = await new SignJWT({ userId: user._id, mobile: user.mobile })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(JWT_SECRET)

    // Return user data without sensitive information
    const userResponse = {
      id: user._id,
      name: user.name,
      state: user.state,
      mobile: user.mobile,
      photo: user.photo,
      membershipNumber: user.membershipNumber,
      createdAt: user.createdAt,
    }

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: userResponse,
      token,
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Failed to login" }, { status: 500 })
  }
}
