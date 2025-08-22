import { type NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

const JWT_SECRET = new TextEncoder().encode("your-secret-key")

async function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("No valid authorization header")
  }

  const token = authHeader.substring(7)
  const { payload } = await jwtVerify(token, JWT_SECRET)
  
  if (payload.role !== "admin") {
    throw new Error("Admin access required")
  }
  
  return payload
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    // Verify admin token
    await verifyAdminToken(request)

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const search = searchParams.get("search") || ""
    const sortBy = searchParams.get("sortBy") || "createdAt"
    const sortOrder = searchParams.get("sortOrder") || "desc"

    // For CSV export, we want all data without pagination
    const isExport = limit > 1000 // If limit is very large, treat as export

    // Build search query
    const searchQuery = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { mobile: { $regex: search, $options: "i" } },
            { state: { $regex: search, $options: "i" } },
            { membershipNumber: { $regex: search, $options: "i" } }
          ]
        }
      : {}

    // Build sort object
    const sortObject: any = {}
    sortObject[sortBy] = sortOrder === "desc" ? -1 : 1

    let users, totalUsers, totalPages

    if (isExport) {
      // For export, get all users without pagination
      users = await User.find(searchQuery)
        .sort(sortObject)
        .select("-__v")
      
      totalUsers = users.length
      totalPages = 1
    } else {
      // Calculate pagination for normal requests
      const skip = (page - 1) * limit

      // Get users with pagination
      users = await User.find(searchQuery)
        .sort(sortObject)
        .skip(skip)
        .limit(limit)
        .select("-__v")

      // Get total count for pagination
      totalUsers = await User.countDocuments(searchQuery)
      totalPages = Math.ceil(totalUsers / limit)
    }

    // Format user data
    const formattedUsers = users.map(user => ({
      id: String(user._id),
      name: user.name,
      mobile: user.mobile,
      state: user.state,
      district: user.district,
      membershipNumber: user.membershipNumber,
      photo: user.photo,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }))

    return NextResponse.json({
      success: true,
      data: {
        users: formattedUsers,
        pagination: {
          currentPage: page,
          totalPages,
          totalUsers,
          limit,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1
        }
      }
    })
  } catch (error) {
    console.error("Get users error:", error)
    if (error instanceof Error && error.message.includes("Admin access required")) {
      return NextResponse.json(
        { success: false, error: "Admin access required" },
        { status: 403 }
      )
    }
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
} 