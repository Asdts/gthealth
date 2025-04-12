"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, BarChart3, Home, LogOut, Settings, User } from "lucide-react"
import Sidebar from "@/components/sidebar"

export default function DashboardPage() {
  const router = useRouter()
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const handleConnect = async () => {
    setIsLoading(true)

    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, this would be the result of the OAuth flow
    localStorage.setItem("fitnessConnected", "true")
    setIsConnected(true)
    setIsLoading(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("fitnessConnected")
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar/>
      {/* Main content */}
      <div className="flex-1">
        <header className="border-b">
          <div className="container flex h-16 items-center justify-between">
            <div className="text-xl font-bold md:hidden">FitnessTracker</div>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleLogout} className="md:hidden">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="container py-6">
          <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

          {!isConnected ? (
            <Card>
              <CardHeader>
                <CardTitle>Connect to Google Fitness</CardTitle>
                <CardDescription>
                  Connect your Google Fitness account to track your workouts, steps, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleConnect} disabled={isLoading}>
                  {isLoading ? "Connecting..." : "Connect Google Fitness"}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="workouts">Workouts</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Steps Today</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">8,246</div>
                        <p className="text-xs text-muted-foreground">+12% from yesterday</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Active Minutes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">42</div>
                        <p className="text-xs text-muted-foreground">-5% from yesterday</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1,842</div>
                        <p className="text-xs text-muted-foreground">+8% from yesterday</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Distance (km)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">6.2</div>
                        <p className="text-xs text-muted-foreground">+15% from yesterday</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Weekly Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                        Activity chart would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="activity" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Daily Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                        Detailed activity data would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="workouts" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Workouts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                        Workout history would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
