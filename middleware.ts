import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // For now, let's disable middleware to debug the navigation issue
  // We'll handle authentication on the client side
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/admin/:path*",
  ],
} 