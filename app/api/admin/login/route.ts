import { type NextRequest, NextResponse } from "next/server"
import { SignJWT } from "jose"

const JWT_SECRET = new TextEncoder().encode("your-secret-key")
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "admin123" // In production, use environment variables

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Validate admin credentials
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Create admin JWT token
    const token = await new SignJWT({ 
      role: "admin",
      username: username 
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(JWT_SECRET)

    return NextResponse.json({
      success: true,
      message: "Admin login successful",
      token,
      user: {
        username,
        role: "admin"
      }
    })
  } catch (error) {
    console.error("Admin login error:", error)
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
} 