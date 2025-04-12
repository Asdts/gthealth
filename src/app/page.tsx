import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold tracking-tight text-gray-800">FitnessTracker</div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/privacy" className="hover:text-black">Privacy</Link>
            <Link href="/user/login" className="hover:text-black">Login</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Track Your Fitness Journey
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Connect with Google Fit to monitor your workouts, steps, and more – all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/user/register">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/user/login">Login</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Track Steps</h3>
                <p className="mt-2 text-sm text-gray-500">Monitor your daily steps and activity levels.</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Workout History</h3>
                <p className="mt-2 text-sm text-gray-500">View your past workouts and track your progress.</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Health Insights</h3>
                <p className="mt-2 text-sm text-gray-500">Get personalized insights based on your fitness data.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-gray-500 md:flex-row">
          <p>© 2025 FitnessTracker. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
