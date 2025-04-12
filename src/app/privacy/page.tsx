import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold">FitnessTracker</div>
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/login">Login</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy Policy</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you create an account, such as your name and email
              address. When you connect your Google Fitness account, we access fitness data such as steps, workouts, and
              activity levels.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, including to track your
              fitness progress and provide personalized insights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Data Sharing and Disclosure</h2>
            <p>
              We do not share your personal information or fitness data with third parties except as described in this
              privacy policy. We may share anonymized, aggregated data for research and analytical purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information and fitness data from
              unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Your Rights</h2>
            <p>
              You can access, update, or delete your account information at any time through your account settings. You
              can also disconnect your Google Fitness account at any time.
            </p>
          </section>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">© 2025 FitnessTracker. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="text-sm text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
