import Link from "next/link"
import { ArrowLeft, Users, MessageCircle, Calendar, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function CommunitySupportPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Community Support</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Connect with Others on Similar Health Journeys</CardTitle>
            <CardDescription>
              Find support, share experiences, and learn from others facing similar health challenges
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our community platform connects you with others who understand what you're going through. Whether you're
              managing a chronic condition, navigating pregnancy, or working toward fitness goals, you'll find
              supportive spaces to share your journey.
            </p>
            <h3 className="text-lg font-medium mt-4">Community Benefits</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Emotional Support</strong> - Connect with others who truly understand your experiences
              </li>
              <li>
                <strong>Practical Advice</strong> - Learn real-world strategies from those who've been there
              </li>
              <li>
                <strong>Motivation</strong> - Stay accountable and inspired on your health journey
              </li>
              <li>
                <strong>Reduced Isolation</strong> - Discover you're not alone in your health challenges
              </li>
              <li>
                <strong>Moderated Spaces</strong> - All groups are overseen by healthcare professionals
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Heart className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Be Respectful</h3>
                <p className="text-sm text-muted-foreground">Treat others with kindness and respect differences</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Protect Privacy</h3>
                <p className="text-sm text-muted-foreground">Don't share others' personal information</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Share Responsibly</h3>
                <p className="text-sm text-muted-foreground">Avoid medical advice; share experiences instead</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Report Concerns</h3>
                <p className="text-sm text-muted-foreground">Flag inappropriate content to moderators</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="groups">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="groups">Support Groups</TabsTrigger>
          <TabsTrigger value="discussions">Active Discussions</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>
        <TabsContent value="groups" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Featured Support Groups</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Pregnancy & New Mothers</CardTitle>
                  <Badge>1.2k members</Badge>
                </div>
                <CardDescription>Support through pregnancy and early motherhood</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center border-2 border-background bg-muted h-8 w-8 rounded-full">
                    <span className="text-xs font-medium">+8</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Join Group
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">PCOS Support</CardTitle>
                  <Badge>856 members</Badge>
                </div>
                <CardDescription>Managing PCOS symptoms and treatments</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>KL</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>MN</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>PQ</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center border-2 border-background bg-muted h-8 w-8 rounded-full">
                    <span className="text-xs font-medium">+5</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Join Group
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Fitness Journey</CardTitle>
                  <Badge>1.5k members</Badge>
                </div>
                <CardDescription>Women supporting each other's fitness goals</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>EF</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center border-2 border-background bg-muted h-8 w-8 rounded-full">
                    <span className="text-xs font-medium">+12</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Join Group
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Menopause & Beyond</CardTitle>
                  <Badge>723 members</Badge>
                </div>
                <CardDescription>Navigating hormonal changes and midlife health</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>GH</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>IJ</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarFallback>KL</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center border-2 border-background bg-muted h-8 w-8 rounded-full">
                    <span className="text-xs font-medium">+4</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Join Group
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="discussions" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Trending Discussions</h3>
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Managing Morning Sickness Naturally</CardTitle>
                  <Badge variant="outline">Pregnancy</Badge>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">Started by Jane D.</span>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm">
                  I'm 8 weeks pregnant and struggling with morning sickness. Has anyone found natural remedies that
                  actually work?
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">32 replies</div>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Reply
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Strength Training After 40</CardTitle>
                  <Badge variant="outline">Fitness</Badge>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">Started by Sarah M.</span>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm">
                  I'm looking to start strength training at 45. Any tips for beginners who are concerned about joint
                  health?
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">18 replies</div>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Reply
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">PCOS and Fertility Journey</CardTitle>
                  <Badge variant="outline">PCOS</Badge>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">Started by Lisa R.</span>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm">
                  After 2 years of trying to conceive with PCOS, I wanted to share my journey and what finally worked
                  for us.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">45 replies</div>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Reply
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="events" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Upcoming Community Events</h3>
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Virtual Prenatal Yoga Class</CardTitle>
                  <Badge>Online</Badge>
                </div>
                <CardDescription>Gentle yoga for all pregnancy stages</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Saturday, June 15 • 10:00 AM</span>
                </div>
                <p className="text-sm mt-2">
                  Join certified prenatal yoga instructor Maria for a 45-minute session designed to relieve common
                  pregnancy discomforts.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Hormonal Health Q&A</CardTitle>
                  <Badge>Online</Badge>
                </div>
                <CardDescription>Live session with Dr. Jennifer Lee, Endocrinologist</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Tuesday, June 18 • 7:00 PM</span>
                </div>
                <p className="text-sm mt-2">
                  Submit your questions about PCOS, thyroid disorders, and other hormonal conditions for our expert
                  panel to answer live.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Women's Fitness Meetup</CardTitle>
                  <Badge>In Person</Badge>
                </div>
                <CardDescription>Central Park Group Exercise Session</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Sunday, June 23 • 9:00 AM</span>
                </div>
                <p className="text-sm mt-2">
                  Join our community for an outdoor workout session followed by coffee and conversation. All fitness
                  levels welcome!
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Our community spaces are moderated to ensure they remain supportive and informative.
          While members share personal experiences, please consult healthcare professionals for medical advice specific
          to your situation.
        </p>
      </div>
    </div>
  )
}
