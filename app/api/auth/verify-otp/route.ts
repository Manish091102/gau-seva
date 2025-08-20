import { type NextRequest, NextResponse } from "next/server"
import { SignJWT } from "jose"
import dbConnect from "@/lib/mongodb"
import OTP from "@/models/OTP"

interface VerifyOtpRequest {
  mobile: string
  otp: string
}

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    
    const body: VerifyOtpRequest = await request.json()
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

    // Accept static OTP 123456 for testing
    const staticOTP = "123456"
    
    // Check if OTP exists and is valid
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
    const token = await new SignJWT({ mobile })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(JWT_SECRET)

    return NextResponse.json({
      success: true,
      message: "OTP verified successfully",
      token,
      mobile,
    })
  } catch (error) {
    console.error("Verify OTP error:", error)
    return NextResponse.json({ error: "Failed to verify OTP" }, { status: 500 })
  }
}
