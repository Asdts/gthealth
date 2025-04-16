// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const publicPaths = [
  "/login", "/register", "/forget", "/verify",
  "/privacy", "/terms", "/about", "/contact", "/reset", "/"
];

export const config = {
  matcher: [
    // Protected routes
    "/dashboard/:path*",
    "/admin/:path*",
    "/user/:path*",
    "/profile/:path*",
    "/settings/:path*",
    // Public routes (for redirection if logged in)
    "/login",
    "/register",
    "/forget",
    "/verify",
    "/reset"
  ],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicPath = publicPaths.includes(pathname);
  const token = request.cookies.get("token")?.value;

  // For public paths, redirect to dashboard if logged in
  if (isPublicPath) {
    if (token) {
      try {
        const verifyRes = await fetch(`${request.nextUrl.origin}/api/auth/user/check`, {
          method: "GET",
          headers: {
            Cookie: `token=${token}`,
          },
        });

        if (verifyRes.ok) {
          // Don't redirect from paths like privacy, terms, etc. even if logged in
          const isAuthPath = ["/login", "/register", "/forget", "/verify", "/reset"].includes(pathname);
          if (isAuthPath) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
          }
        }
      } catch (error) {
        console.error("API verify failed:", error);
      }
    }
    return NextResponse.next();
  }

  // For protected paths, verify authentication
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const verifyRes = await fetch(`${request.nextUrl.origin}/api/auth/user/check`, {
      method: "GET",
      headers: {
        Cookie: `token=${token}`,
      },
    });

    if (!verifyRes.ok) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const data = await verifyRes.json();

    if (!data.user?.isVerified) {
      return NextResponse.redirect(new URL("/verify", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("API verify failed:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}