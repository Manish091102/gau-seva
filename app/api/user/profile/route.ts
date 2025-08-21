import { type NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

const JWT_SECRET = new TextEncoder().encode("your-secret-key")

async function verifyToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("No valid authorization header")
  }

  const token = authHeader.substring(7)
  const { payload } = await jwtVerify(token, JWT_SECRET)
  return payload
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    // Verify JWT token
    const payload = await verifyToken(request)
    const userId = payload.userId as string

    if (!userId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    // Get user from database
    const user = await User.findById(userId)
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Return user data without sensitive information
    const userResponse = {
      id: String(user._id),
      name: user.name,
      state: user.state,
      mobile: user.mobile,
      photo: user.photo,
      membershipNumber: user.membershipNumber,
      createdAt: user.createdAt,
    }

    return NextResponse.json({
      success: true,
      user: userResponse,
    })
  } catch (error) {
    console.error("Get profile error:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    await dbConnect()

    // Verify JWT token
    const payload = await verifyToken(request)
    const userId = payload.userId as string

    if (!userId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    // Parse request body
    const body = await request.json()
    const { name, state, photo } = body

    // Validate updates
    const updates: any = {}

    if (name !== undefined) {
      if (typeof name !== "string" || name.trim().length < 2) {
        return NextResponse.json({ error: "Name must be at least 2 characters long" }, { status: 400 })
      }
      updates.name = name.trim()
    }

    if (state !== undefined) {
      if (typeof state !== "string" || state.trim().length === 0) {
        return NextResponse.json({ error: "State is required" }, { status: 400 })
      }
      updates.state = state
    }

    if (photo !== undefined) {
      updates.photo = photo
    }

    // Update user in database
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { ...updates } },
      { new: true, runValidators: true }
    )

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Return updated user data
    const userResponse = {
      id: String(updatedUser._id),
      name: updatedUser.name,
      state: updatedUser.state,
      mobile: updatedUser.mobile,
      photo: updatedUser.photo,
      membershipNumber: updatedUser.membershipNumber,
      createdAt: updatedUser.createdAt,
    }

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      user: userResponse,
    })
  } catch (error) {
    console.error("Update profile error:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
