import Link from "next/link"
import { ArrowLeft, Heart, Moon, Calendar, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PostpartumCarePage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Postpartum Care</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Comprehensive Postpartum Support</CardTitle>
            <CardDescription>Guidance and resources for the crucial weeks and months after childbirth</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The postpartum period, often called the "fourth trimester," is a time of significant physical and
              emotional adjustment. Our comprehensive support provides evidence-based information, personalized
              guidance, and resources to help you navigate this transformative time with confidence.
            </p>
            <h3 className="text-lg font-medium mt-4">Key Focus Areas</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Physical Recovery</strong> - Healing from childbirth and managing physical changes
              </li>
              <li>
                <strong>Emotional Wellbeing</strong> - Addressing mood changes, anxiety, and postpartum depression
              </li>
              <li>
                <strong>Infant Care</strong> - Guidance on feeding, sleep, and newborn development
              </li>
              <li>
                <strong>Self-Care</strong> - Strategies for rest, nutrition, and finding balance
              </li>
              <li>
                <strong>Relationship Support</strong> - Navigating changes in relationships and intimacy
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Postpartum Timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">First Week</h3>
                <p className="text-sm text-muted-foreground">
                  Initial recovery, establishing feeding, and adjusting to newborn care
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Weeks 2-6</h3>
                <p className="text-sm text-muted-foreground">
                  Continued physical healing, emotional adjustment, and establishing routines
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">6 Weeks - 3 Months</h3>
                <p className="text-sm text-muted-foreground">
                  Postpartum check-up, possible return to work, and evolving baby development
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">3 Months - 1 Year</h3>
                <p className="text-sm text-muted-foreground">
                  Long-term recovery, adapting to parenthood, and continued support
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="physical">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="physical">Physical Recovery</TabsTrigger>
          <TabsTrigger value="emotional">Emotional Health</TabsTrigger>
          <TabsTrigger value="infant">Infant Care</TabsTrigger>
          <TabsTrigger value="selfcare">Self-Care</TabsTrigger>
        </TabsList>
        <TabsContent value="physical" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Physical Recovery</h3>
          <p className="mb-3">
            Your body needs time to heal after childbirth, whether you had a vaginal delivery or cesarean birth.
          </p>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">Vaginal Delivery Recovery</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Use ice packs and sitz baths for perineal pain</li>
                <li>Practice pelvic floor exercises when cleared by your provider</li>
                <li>Expect bleeding (lochia) for 4-6 weeks</li>
                <li>Take pain relievers as recommended by your healthcare provider</li>
              </ul>
            </div>
            <div className="border-b pb-3">
              <h4 className="font-medium">C-Section Recovery</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Keep the incision clean and dry</li>
                <li>Use a pillow to support your abdomen when coughing or breastfeeding</li>
                <li>Avoid lifting anything heavier than your baby</li>
                <li>Take pain medication as prescribed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Common Physical Changes</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Breast changes (engorgement, leaking)</li>
                <li>Hair loss</li>
                <li>Sweating and hormonal fluctuations</li>
                <li>Gradual weight changes</li>
                <li>Possible diastasis recti (abdominal separation)</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="emotional" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Emotional Wellbeing</h3>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">Baby Blues vs. Postpartum Depression</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="font-medium">Baby Blues</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Affects up to 80% of new mothers</li>
                    <li>Begins within days of delivery</li>
                    <li>Typically resolves within two weeks</li>
                    <li>Symptoms include mood swings, anxiety, irritability, and crying</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Postpartum Depression</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Affects 1 in 7 new mothers</li>
                    <li>Can begin anytime in the first year</li>
                    <li>Requires treatment and support</li>
                    <li>Symptoms include persistent sadness, severe anxiety, and difficulty bonding</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium">Supporting Emotional Health</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Ask for Help</p>
                    <p className="text-sm text-muted-foreground">
                      Accept support from family and friends for meals, housework, and baby care
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Connect with Others</p>
                    <p className="text-sm text-muted-foreground">Join new parent groups or online communities</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Seek Professional Help</p>
                    <p className="text-sm text-muted-foreground">
                      Talk to your healthcare provider if you experience persistent symptoms
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="infant" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Infant Care Basics</h3>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">Feeding</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <div>
                  <p className="font-medium">Breastfeeding</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Feed on demand, typically 8-12 times in 24 hours</li>
                    <li>Look for proper latch and positioning</li>
                    <li>Consider consulting a lactation specialist for support</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Formula Feeding</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Follow package instructions for preparation</li>
                    <li>Feed approximately every 3-4 hours</li>
                    <li>Hold baby semi-upright during and after feeding</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-b pb-3">
              <h4 className="font-medium">Sleep</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <Moon className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Safe Sleep Practices</p>
                    <p className="text-sm text-muted-foreground">
                      Place baby on back on firm surface, no loose bedding or soft objects
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Moon className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Newborn Sleep Patterns</p>
                    <p className="text-sm text-muted-foreground">
                      Expect 14-17 hours of sleep in 24 hours, in short 2-3 hour cycles
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Diapering and Bathing</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Change diapers frequently, cleaning front to back</li>
                <li>Sponge bathe until umbilical cord falls off</li>
                <li>Use mild, fragrance-free products</li>
                <li>Never leave baby unattended during bath time</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="selfcare" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Self-Care Strategies</h3>
          <p className="mb-3">
            Taking care of yourself is essential for your wellbeing and your ability to care for your baby.
          </p>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">Rest and Sleep</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <Moon className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>Sleep when your baby sleeps when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <Moon className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>Share night duties with a partner or support person</span>
                </li>
                <li className="flex items-start gap-2">
                  <Moon className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>Keep naps to 20-30 minutes if you struggle with nighttime sleep</span>
                </li>
              </ul>
            </div>
            <div className="border-b pb-3">
              <h4 className="font-medium">Nutrition</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <Activity className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>Stay hydrated, especially if breastfeeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <Activity className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>Focus on nutrient-dense foods</span>
                </li>
                <li className="flex items-start gap-2">
                  <Activity className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>Accept help with meal preparation</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Mental Space</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>Take short breaks, even just 5-10 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>Practice mindfulness or deep breathing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>Lower expectations and be gentle with yourself</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Disclaimer:</strong> This information is for educational purposes only and is not intended to be a
          substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician
          or other qualified health provider with any questions you may have regarding postpartum care or a medical
          condition.
        </p>
      </div>
    </div>
  )
}
