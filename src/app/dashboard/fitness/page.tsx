"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, BarChart3, Home, LogOut, Settings, User } from "lucide-react"
import Sidebar from "@/components/sidebar"

export default function FitnessDataPage() {
  const router = useRouter()
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = async () => {
    // Simulate OAuth flow
    setIsConnected(true)
    localStorage.setItem("fitnessConnected", "true")
  }
  const [isLoading, setIsLoading] = useState(false)


  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("fitnessConnected")
    router.push("/login")
  }

  if (!isConnected) {
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
          <h1 className="mb-6 text-3xl font-bold">Connect to Fitness Tracker</h1>

          <Card>
            <CardHeader>
              <CardTitle>Connect to your fitness tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Click the button below to connect your fitness tracker.</p>
              <Button onClick={handleConnect} disabled={isLoading}>
                {isLoading ? "Connecting..." : "Connect"}
              </Button>
            </CardContent>
          </Card>

        </main>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar handleLogout={handleLogout}/>
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
          <h1 className="mb-6 text-3xl font-bold">Fitness Data</h1>

          <div className="space-y-6">
            <Tabs defaultValue="steps">
              <TabsList>
                <TabsTrigger value="steps">Steps</TabsTrigger>
                <TabsTrigger value="heart-rate">Heart Rate</TabsTrigger>
                <TabsTrigger value="sleep">Sleep</TabsTrigger>
                <TabsTrigger value="workouts">Workouts</TabsTrigger>
              </TabsList>

              <TabsContent value="steps" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <div className="text-6xl font-bold mb-2">8,246</div>
                        <div className="text-xl">steps today</div>
                        <div className="text-sm text-muted-foreground mt-2">Goal: 10,000 steps</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "82%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                      Step chart would be displayed here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="heart-rate" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Heart Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                      Heart rate data would be displayed here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sleep" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sleep Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                      Sleep data would be displayed here
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
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Morning Run</h3>
                            <p className="text-sm text-muted-foreground">Today, 6:30 AM</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">5.2 km</p>
                            <p className="text-sm text-muted-foreground">32 min</p>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Gym Workout</h3>
                            <p className="text-sm text-muted-foreground">Yesterday, 5:45 PM</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">Strength Training</p>
                            <p className="text-sm text-muted-foreground">45 min</p>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Evening Walk</h3>
                            <p className="text-sm text-muted-foreground">Yesterday, 7:30 PM</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">2.8 km</p>
                            <p className="text-sm text-muted-foreground">35 min</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

    </div>
  )
}
