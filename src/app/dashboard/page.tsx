/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, Settings } from "lucide-react"
import { signIn , signOut } from "next-auth/react"

export default function DashboardPage() {

  const [isLoading, setIsLoading] = useState(false)

  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchToken = async () => {
      const res = await fetch("/api/auth/user/accesstoken", {
        method: "POST",
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Token refreshed successfully");
        setIsConnected(true);
        setIsLoading(false);
      }
    };
  
    fetchToken();
  }, []);
  

  const handleConnect = async () => {
    setIsLoading(true)
    await signIn("google", {
      callbackUrl: "/dashboard/fitness",
    })
  }

  const handleLogout = async () => {
    const res = await fetch("/api/auth/user/logout");
    await signOut({ callbackUrl: "/login" })
  }
  if(isLoading){
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
        Connecting...
      </div>
    )
  }
  return (
    <div className="flex-1">
      {/* <header className="border-b">
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
      </header> */}

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
  )
}