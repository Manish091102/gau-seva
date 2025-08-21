import { type NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

interface User {
  id: string
  name: string
  state: string
  district: string
  mobile: string
  photo?: string
  membershipNumber: string
  createdAt: string
  updatedAt: string
}

interface MembershipCardData {
  user: {
    id: string
    name: string
    state: string
    mobile: string
    photo?: string
    membershipNumber: string
    createdAt: string
  }
  qrData: string
  cardUrl?: string
}

// In-memory storage for demo purposes - replace with database in production
const usersStorage = new Map<string, User>()

const JWT_SECRET = new TextEncoder().encode( "your-secret-key")

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

    // Generate QR code data
    const qrData = JSON.stringify({
      name: user.name,
      membershipNumber: user.membershipNumber,
      state: user.state,
      mobile: user.mobile,
      organization: "Gau Seva",
      verificationUrl: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/verify/${user.membershipNumber}`,
    })

    // Prepare membership card data
    const cardData = {
      user: {
        id: String(user._id),
        name: user.name,
        state: user.state,
        district: user.district,
        mobile: user.mobile,
        photo: user.photo,
        membershipNumber: user.membershipNumber,
        createdAt: user.createdAt,
      },
      qrData,
    }

    return NextResponse.json({
      success: true,
      cardData,
    })
  } catch (error) {
    console.error("Get membership card error:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
