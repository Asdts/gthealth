/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { ArrowLeft, Dumbbell, Clock, Calendar, Heart, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function MaleFitnessPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Workout & Fitness</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Tailored Fitness for Men</CardTitle>
            <CardDescription>
              Fitness plans designed specifically for male physiology and goals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Men's bodies have specific physiological characteristics that affect how they 
              respond to different types of exercise. Our fitness plans take into account 
              factors like testosterone levels, muscle mass distribution, and typical male 
              fitness goals to provide optimized workout routines.
            </p>
            <h3 className="text-lg font-medium mt-4">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Increased muscle mass and strength</li>
              <li>Improved cardiovascular health</li>
              <li>Enhanced metabolic rate</li>
              <li>Better hormonal balance</li>
              <li>Reduced risk of age-related health issues</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Targets</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Strength Training</span>
                <span className="text-sm text-muted-foreground">3-4 sessions</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Cardio</span>
                <span className="text-sm text-muted-foreground">2-3 sessions</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Flexibility</span>
                <span className="text-sm text-muted-foreground">1-2 sessions</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Rest Days</span>
                <span className="text-sm text-muted-foreground">2 days</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="strength">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="recovery">Recovery</TabsTrigger>
        </TabsList>
        <TabsContent value="strength" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Strength Training</h3>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">Upper Body Day</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <div className="flex items-start gap-2">
                  <Dumbbell className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Bench Press</p>
                    <p className="text-sm text-muted-foreground">4 sets x 8-10 reps</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Dumbbell className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Rows</p>
                    <p className="text-sm text-muted-foreground">4 sets x 10-12 reps</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Dumbbell className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Shoulder Press</p>
                    <p className="text-sm text-muted-foreground">3 sets x 10 reps</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Dumbbell className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Bicep Curls</p>
                    <p className="text-sm text-muted-foreground">3 sets x 12 reps</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium">Lower Body Day</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <div className="flex items-start gap-2">
                  <Dumbbell className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Squats</p>
                    <p className="text-sm text-muted-foreground">4 sets x 8-10 reps</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Dumbbell className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Deadlifts</p>
                    <p className="text-sm text-muted-foreground">4 sets x 6-8 reps</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Dumbbell className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Lunges</p>
                    <p className="text-sm text-muted-foreground">3 sets x 10 reps each leg</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Dumbbell className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Calf Raises</p>
                    <p className="text-sm text-muted-foreground">3 sets x 15 reps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="cardio" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Cardio Training</h3>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">High-Intensity Interval Training (HIIT)</h4>
              <p className="text-sm text-muted-foreground mt-1">20-30 minutes, 2x per week</p>
              <div className="mt-2">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span>30 seconds sprint, 30 seconds rest x 10 rounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span>Target heart rate: 80-90% of max</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-medium">Steady-State Cardio</h4>
              <p className="text-sm text-muted-foreground mt-1">30-45 minutes, 1-2x per week</p>
              <div className="mt-2">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span>Jogging, cycling, or rowing at moderate intensity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span>Target heart rate: 60-70% of max</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="recovery" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Recovery & Maintenance</h3>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">Active Recovery</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Light Activities</p>
                    <p className="text-sm text-muted-foreground">Walking, swimming, or yoga</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Stretching</p>
                    <p className="text-sm text-muted-foreground">10-15 minutes daily</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Nutrition & Sleep</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <BarChart className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Protein Intake</p>
                    <p className="text-sm text-muted-foreground">1.6-2.2g per kg of bodyweight</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Sleep</p>
                    <p className="text-sm text-muted-foreground">7-9 hours per night</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Always consult with a healthcare provider before starting any new exercise program, especially if you have pre-existing health conditions or concerns.
        </p>
      </div>
    </div>
  )
}
