"use client"
import Sidebar from "@/components/sidebar"
import { SessionProvider } from "next-auth/react"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        {/* {isTokenValid && <NavbarLogin />} */}
        <SessionProvider>
          {children}
        </SessionProvider>
      </div>
    </div>
  )
}