"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import MainLogin from "@/components/mainLogin"
import MainNotLogin from "@/components/mainNotLogin"

export default function Home() {
  const [isLogIn, setIsLogIn] = useState(false)
  useEffect(() => {
    const checkToken = async () => {
      const res = await fetch("/api/auth/user/check", {
        method: "GET",
        credentials: "include",
      })
      if (res.ok) {
        setIsLogIn(true)
      } else {
        setIsLogIn(false)
      }
    }
    checkToken()
  }, [])
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      {!isLogIn && (<header className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold tracking-tight text-gray-800">FitnessTracker</div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/privacy" className="hover:text-black">Privacy</Link>
            <Link href="/user/login" className="hover:text-black">Login</Link>
          </nav>
        </div>
      </header>)}

      {/* Main Content */}
      {!isLogIn?(<MainNotLogin/>):(<MainLogin/>)}

      {/* Footer */}
      <footer className="border-t bg-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-gray-500 md:flex-row">
          <p>© 2025 FitnessTracker. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}