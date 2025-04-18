/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { ArrowLeft, Activity, Shield, Dumbbell, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeatureCard } from "@/components/featureCard"

export default function MenPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Men's Health</h1>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 bg-center bg-cover"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Comprehensive Health for Men</h2>
            <p className="text-lg text-white/90 max-w-md">
              Personalized resources, expert guidance, and community support tailored to men's unique health needs.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-white/10 flex items-center justify-center">
              <Shield className="h-32 w-32 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-primary">70%</div>
            <p className="text-sm text-muted-foreground mt-1">
              of men don't regularly visit a doctor for preventive care
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-primary">1 in 9</div>
            <p className="text-sm text-muted-foreground mt-1">men will be diagnosed with prostate cancer</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-primary">3x</div>
            <p className="text-sm text-muted-foreground mt-1">higher suicide rates among men than women</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-primary">5 yrs</div>
            <p className="text-sm text-muted-foreground mt-1">shorter average lifespan compared to women</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="health" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="health">Health</TabsTrigger>
          <TabsTrigger value="fitness">Fitness</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>
        <TabsContent value="health" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Prostate Health"
              description="Essential information about prostate health, screenings, and prevention."
              link="/health/prostate"
            />
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Heart Health"
              description="Guidance for maintaining cardiovascular health and reducing risks."
              link="/health/heart"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Mental Wellbeing"
              description="Resources for managing stress, anxiety, and maintaining mental health."
              link="/health/mental"
            />
          </div>
        </TabsContent>
        <TabsContent value="fitness" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Dumbbell className="h-6 w-6" />}
              title="Strength Training"
              description="Customized workout routines for building strength and muscle."
              link="/fitness/male"
            />
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Cardio Fitness"
              description="Effective cardio workouts to improve endurance and heart health."
              link="/fitness/cardio"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Sports Nutrition"
              description="Dietary guidance to optimize performance and recovery."
              link="/fitness/nutrition"
            />
          </div>
        </TabsContent>
        <TabsContent value="support" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<HelpCircle className="h-6 w-6" />}
              title="Expert Q&A"
              description="Get answers to your health questions from medical professionals."
              link="/support/qa"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Anonymous Support"
              description="Confidential help for sensitive health concerns."
              link="/support/anonymous"
            />
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Community Forum"
              description="Connect with others facing similar health challenges."
              link="/support/community"
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* Testimonials */}
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-6">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The prostate health resources helped me understand when to get screened. I caught an issue early
                  thanks to this information."
                </p>
                <div className="mt-4 font-medium">Michael, 52</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The workout plans are excellent. I've seen significant improvements in my strength and energy levels
                  in just two months."
                </p>
                <div className="mt-4 font-medium">James, 34</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The anonymous support feature allowed me to ask questions I was too embarrassed to discuss with
                  friends. Life-changing."
                </p>
                <div className="mt-4 font-medium">Robert, 41</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Take Control of Your Health Today</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Join thousands of men who are prioritizing their health and wellbeing with personalized resources and support.
        </p>
        <Button size="lg">Create Your Health Profile</Button>
      </div>
    </div>
  )
}
