import Link from "next/link";
export default function NavbarLogin() {
    return (
        <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold tracking-tight text-gray-800">FitnessTracker</div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/dashboard" className="hover:text-black">Dashboard</Link>
            <Link href="/man" className="hover:text-black">Man</Link>
            <Link href="/female" className="hover:text-black">Women</Link>
            <Link href="/medical" className="hover:text-black">Medical</Link>
            <Link href="/privacy" className="hover:text-black">Privacy</Link>
            <Link href="/profile" className="hover:text-black">Profile</Link>
          </nav>
        </div>
      </header>
    );
}