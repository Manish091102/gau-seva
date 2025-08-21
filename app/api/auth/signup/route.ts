import { type NextRequest, NextResponse } from "next/server"
import { SignJWT } from "jose"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

interface SignupRequest {
  name: string
  state: string
  mobile: string
  photo?: string
}

const JWT_SECRET = new TextEncoder().encode("your-secret-key")

export async function POST(request: NextRequest) {
  try {
    await dbConnect()
    
    const body: SignupRequest = await request.json()
    const { name, state, mobile, photo } = body

    // Validate required fields
    if (!name || !state || !mobile) {
      return NextResponse.json({ error: "Name, state, and mobile are required" }, { status: 400 })
    }

    // Validate mobile number
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json({ error: "Invalid mobile number" }, { status: 400 })
    }

    // Validate name length
    if (name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters long" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ mobile })
    if (existingUser) {
      return NextResponse.json({ error: "User with this mobile number already exists" }, { status: 409 })
    }

    // Create new user
    const newUser = new User({
      name: name.trim(),
      state,
      mobile,
      photo,
    })

    await newUser.save()

    // Generate JWT token
    const token = await new SignJWT({ userId: newUser._id, mobile: newUser.mobile })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(JWT_SECRET)

    // Return user data without sensitive information
    const userResponse = {
      id: newUser._id,
      name: newUser.name,
      state: newUser.state,
      mobile: newUser.mobile,
      photo:"https://fastly.picsum.photos/id/67/200/300.jpg?hmac=GntzjckKE7-naeHFrr8ZEIIaj3Bm-Iln4f844p1Np08",
      membershipNumber: newUser.membershipNumber,
      createdAt: newUser.createdAt,
    }

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: userResponse,
        token,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Failed to register user" }, { status: 500 })
  }
}
