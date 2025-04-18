import Link from "next/link"
import { ArrowLeft, Search, MessageCircle, ThumbsUp, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function QAPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Q&A with Experts</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Get Answers to Your Health Questions</CardTitle>
            <CardDescription>Connect with healthcare professionals for reliable information and advice</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our Q&A platform connects you with verified healthcare experts who can provide evidence-based answers to
              your health questions. Browse existing answers or submit your own question to receive personalized
              guidance.
            </p>
            <h3 className="text-lg font-medium mt-4">Our Expert Panel</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Board-Certified Physicians</strong> - Specialists in obstetrics, gynecology, endocrinology, and
                primary care
              </li>
              <li>
                <strong>Registered Dietitians</strong> - Nutrition experts specializing in women's health needs
              </li>
              <li>
                <strong>Certified Fitness Professionals</strong> - Trainers with expertise in women's fitness
              </li>
              <li>
                <strong>Mental Health Professionals</strong> - Psychologists and therapists focused on women's mental
                wellbeing
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search existing questions..." className="pl-8" />
            </div>
            <div className="bg-muted/50 p-4 rounded-md">
              <h3 className="font-medium text-sm mb-2">Can't find what you're looking for?</h3>
              <Button className="w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                Submit a New Question
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Most questions receive an expert response within 24-48 hours.
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="popular">
        <div className="flex items-center justify-between mb-2">
          <TabsList>
            <TabsTrigger value="popular">Popular Questions</TabsTrigger>
            <TabsTrigger value="recent">Recent Questions</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <TabsContent value="popular" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">Is it normal to have irregular periods with PCOS?</CardTitle>
                <Badge>Hormonal Health</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">Dr. Rebecca Chen</span>
                    <Badge variant="outline" className="text-xs">
                      Endocrinologist
                    </Badge>
                  </div>
                  <p className="text-sm mt-1">
                    Yes, irregular periods are one of the most common symptoms of PCOS. This happens because PCOS can
                    disrupt your normal hormonal cycle, particularly affecting ovulation. Many people with PCOS have
                    fewer than 8-9 periods per year, or sometimes very unpredictable cycles...
                  </p>
                  <Button variant="link" className="p-0 h-auto text-sm mt-1">
                    Read full answer
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-3">
              <div className="text-sm text-muted-foreground">Answered 2 days ago</div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Helpful (45)
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">What exercises are safe during the first trimester?</CardTitle>
                <Badge>Pregnancy</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback>JT</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">Jessica Taylor</span>
                    <Badge variant="outline" className="text-xs">
                      Prenatal Fitness Specialist
                    </Badge>
                  </div>
                  <p className="text-sm mt-1">
                    During the first trimester, most exercises that you were doing before pregnancy are generally safe
                    to continue, with some modifications. Walking, swimming, stationary cycling, and low-impact aerobics
                    are excellent choices. Strength training with lighter weights is also beneficial...
                  </p>
                  <Button variant="link" className="p-0 h-auto text-sm mt-1">
                    Read full answer
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-3">
              <div className="text-sm text-muted-foreground">Answered 5 days ago</div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Helpful (38)
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">How often should I perform breast self-exams?</CardTitle>
                <Badge>Breast Health</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback>DM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">Dr. Maria Johnson</span>
                    <Badge variant="outline" className="text-xs">
                      OB/GYN
                    </Badge>
                  </div>
                  <p className="text-sm mt-1">
                    Current guidelines have moved away from recommending a structured monthly breast self-exam. Instead,
                    we now emphasize "breast self-awareness" - being familiar with how your breasts normally look and
                    feel so you can notice changes. Many women find it helpful to check their breasts...
                  </p>
                  <Button variant="link" className="p-0 h-auto text-sm mt-1">
                    Read full answer
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-3">
              <div className="text-sm text-muted-foreground">Answered 1 week ago</div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Helpful (29)
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">Can certain foods help with postpartum recovery?</CardTitle>
                <Badge>Postpartum</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback>SN</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">Sarah Nguyen, RD</span>
                    <Badge variant="outline" className="text-xs">
                      Dietitian
                    </Badge>
                  </div>
                  <p className="text-sm mt-1">
                    Nutrition plays a crucial role in postpartum recovery. Focus on iron-rich foods like lean meats,
                    beans, and leafy greens to replenish blood loss from delivery. Protein is essential for tissue
                    repair - aim for sources like eggs, fish, and legumes. If you're breastfeeding...
                  </p>
                  <Button variant="link" className="p-0 h-auto text-sm mt-1">
                    Read full answer
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-3">
              <div className="text-sm text-muted-foreground">Answered 12 hours ago</div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Helpful (7)
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">How can I manage hot flashes during perimenopause?</CardTitle>
                <Badge>Hormonal Health</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback>KW</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">Dr. Karen Williams</span>
                    <Badge variant="outline" className="text-xs">
                      Endocrinologist
                    </Badge>
                  </div>
                  <p className="text-sm mt-1">
                    Hot flashes can be challenging during perimenopause. Some effective management strategies include
                    identifying and avoiding triggers (like spicy foods, alcohol, and caffeine), dressing in layers,
                    keeping your bedroom cool at night, and practicing stress reduction techniques...
                  </p>
                  <Button variant="link" className="p-0 h-auto text-sm mt-1">
                    Read full answer
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-3">
              <div className="text-sm text-muted-foreground">Answered 1 day ago</div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Helpful (12)
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="hormonal">
                <AccordionTrigger>Hormonal Health</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        PCOS Management (24 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Thyroid Disorders (18 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Menopause & Perimenopause (32 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Endometriosis (15 questions)
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pregnancy">
                <AccordionTrigger>Pregnancy & Postpartum</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        First Trimester (28 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Second Trimester (22 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Third Trimester (31 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Postpartum Recovery (26 questions)
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="breast">
                <AccordionTrigger>Breast Health</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Screening & Prevention (19 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Breast Changes (14 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Risk Assessment (11 questions)
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="fitness">
                <AccordionTrigger>Fitness & Exercise</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Strength Training (22 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Cardio & Endurance (17 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Prenatal Fitness (20 questions)
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Exercise for Specific Conditions (16 questions)
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Disclaimer:</strong> The information provided in our Q&A section is for educational purposes only and
          is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the
          advice of your physician or other qualified health provider with any questions you may have regarding a
          medical condition.
        </p>
      </div>
    </div>
  )
}
