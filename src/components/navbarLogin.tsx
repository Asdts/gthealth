"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavbarLogin() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-2xl font-bold tracking-tight text-gray-800">
          <Link href="/" className="hover:text-black">
            <span className="text-blue-500">Fitness</span>Tracker
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/dashboard" className="hover:text-black">Dashboard</Link>
          <Link href="/man" className="hover:text-black">Man</Link>
          <Link href="/female" className="hover:text-black">Women</Link>
          <Link href="/medical" className="hover:text-black">Medical</Link>
          <Link href="/privacy" className="hover:text-black">Privacy</Link>
          <Link href="/profile" className="hover:text-black">Profile</Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-2 space-y-2 text-sm font-medium text-gray-600">
          <Link href="/" className="block hover:text-black" onClick={toggleMenu}>Home</Link>
          <Link href="/dashboard" className="block hover:text-black" onClick={toggleMenu}>Dashboard</Link>
          <Link href="/man" className="block hover:text-black" onClick={toggleMenu}>Man</Link>
          <Link href="/female" className="block hover:text-black" onClick={toggleMenu}>Women</Link>
          <Link href="/medical" className="block hover:text-black" onClick={toggleMenu}>Medical</Link>
          <Link href="/privacy" className="block hover:text-black" onClick={toggleMenu}>Privacy</Link>
          <Link href="/profile" className="block hover:text-black" onClick={toggleMenu}>Profile</Link>
        </div>
      )}
    </header>
  );
}
