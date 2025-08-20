import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

export async function GET(request: NextRequest, { params }: { params: { membershipNumber: string } }) {
  try {
    await dbConnect()

    const { membershipNumber } = params

    if (!membershipNumber) {
      return NextResponse.json({ error: "Membership number is required" }, { status: 400 })
    }

    // Find user by membership number
    const user = await User.findOne({ membershipNumber })

    if (!user) {
      return NextResponse.json(
        {
          error: "Invalid membership number",
          valid: false,
        },
        { status: 404 },
      )
    }

    // Return verification data (without sensitive information)
    const verificationData = {
      valid: true,
      member: {
        name: user.name,
        state: user.state,
        membershipNumber: user.membershipNumber,
        memberSince: user.createdAt,
        organization: "Gau Seva",
      },
    }

    return NextResponse.json({
      success: true,
      ...verificationData,
    })
  } catch (error) {
    console.error("Verify membership error:", error)
    return NextResponse.json({ error: "Verification failed" }, { status: 500 })
  }
}
