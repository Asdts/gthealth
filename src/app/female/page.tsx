/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { ArrowLeft, Activity, Shield, Heart, Baby, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeatureCard } from "@/components/featureCard"

export default function WomenPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Women's Health</h1>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 bg-center bg-cover"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Empowered Health for Women</h2>
            <p className="text-lg text-white/90 max-w-md">
              Personalized resources, expert guidance, and community support tailored to women's unique health needs
              throughout all life stages.
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
              <Heart className="h-32 w-32 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-primary">1 in 8</div>
            <p className="text-sm text-muted-foreground mt-1">women will develop breast cancer in their lifetime</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-primary">10%</div>
            <p className="text-sm text-muted-foreground mt-1">of women have PCOS, affecting hormonal health</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-primary">2x</div>
            <p className="text-sm text-muted-foreground mt-1">higher rates of depression and anxiety in women</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-4xl font-bold text-primary">80%</div>
            <p className="text-sm text-muted-foreground mt-1">of autoimmune disease patients are women</p>
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
              icon={<Activity className="h-6 w-6" />}
              title="Hormonal Health"
              description="Track and manage PCOS and other hormonal conditions."
              link="/health/hormonal"
            />
            <FeatureCard
              icon={<Baby className="h-6 w-6" />}
              title="Pregnancy Care"
              description="Comprehensive support throughout pregnancy and postpartum."
              link="/health/pregnancy"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Breast Health"
              description="Resources and reminders for breast health awareness."
              link="/health/breast"
            />
            <FeatureCard
              icon={<Baby className="h-6 w-6" />}
              title="Postpartum Care"
              description="Support for physical and emotional recovery after childbirth."
              link="/health/postpartum"
            />
          </div>
        </TabsContent>
        <TabsContent value="fitness" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Women's Exercise"
              description="Customized workout routines for women's fitness needs."
              link="/fitness/female"
            />
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Prenatal Fitness"
              description="Safe and effective exercises during pregnancy."
              link="/fitness/prenatal"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Nutrition Guide"
              description="Dietary recommendations for women's specific nutritional needs."
              link="/fitness/nutrition"
            />
          </div>
        </TabsContent>
        <TabsContent value="support" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Community Support"
              description="Connect with others on similar health journeys."
              link="/support/community"
            />
            <FeatureCard
              icon={<HelpCircle className="h-6 w-6" />}
              title="Q&A"
              description="Get answers to your health questions from experts."
              link="/support/qa"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Anonymous Help"
              description="Confidential support for sensitive health topics."
              link="/support/anonymous"
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
                  "The PCOS resources helped me understand my condition and work with my doctor on a management plan.
                  I'm feeling so much better now."
                </p>
                <div className="mt-4 font-medium">Sarah, 29</div>
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
                  "The pregnancy resources were invaluable during my first pregnancy. I felt informed and prepared every
                  step of the way."
                </p>
                <div className="mt-4 font-medium">Emily, 32</div>
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
                  "The community support has been life-changing. Connecting with women going through similar experiences
                  made me feel less alone."
                </p>
                <div className="mt-4 font-medium">Jessica, 45</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Take Control of Your Health Today</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Join thousands of women who are prioritizing their health and wellbeing with personalized resources and
          support.
        </p>
        <Button size="lg">Create Your Health Profile</Button>
      </div>
    </div>
  )
}
