// middleware.ts
import { NextRequest, NextResponse } from "next/server"

const excludedPaths = [
  "/login", "/register", "/forget", "/verify",
  "/privacy", "/terms", "/about", "/contact", "/reset", "/"
]

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/user/:path*",
    "/profile/:path*",
    "/settings/:path*",
  ],
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isPublic = excludedPaths.includes(pathname)
  const token = request.cookies.get("token")?.value

  if (isPublic) {
    if (token) {
      const verifyRes = await fetch(`${request.nextUrl.origin}/api/auth/user/check`, {
        method: "GET",
        headers: {
          Cookie: `token=${token}`,
        },
      })

      if (verifyRes.ok) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }
    }
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    const verifyRes = await fetch(`${request.nextUrl.origin}/api/auth/user/check`, {
      method: "GET",
      headers: {
        Cookie: `token=${token}`,
      },
    })

    if (!verifyRes.ok) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    const data = await verifyRes.json()
    // console.log("User data:", data)

    if (!data.user?.isVerified) {
      return NextResponse.redirect(new URL("/auth", request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error("API verify failed:", error)
    return NextResponse.redirect(new URL("/login", request.url))
  }
}
