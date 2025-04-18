/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { ArrowLeft, Activity, Calendar, FileText, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HormonalHealthPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Hormonal Health</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Understanding Hormonal Health</CardTitle>
            <CardDescription>
              Hormones play a crucial role in regulating many bodily functions and overall wellbeing.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Hormones are chemical messengers that travel throughout the body coordinating complex processes like
              growth, metabolism, fertility, and mood. Hormonal imbalances can affect many aspects of your health and
              quality of life.
            </p>
            <h3 className="text-lg font-medium mt-4">Common Hormonal Conditions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>PCOS (Polycystic Ovary Syndrome)</strong> - A condition involving irregular periods, elevated
                androgen levels, and ovarian cysts
              </li>
              <li>
                <strong>Thyroid Disorders</strong> - Including hypothyroidism and hyperthyroidism
              </li>
              <li>
                <strong>Endometriosis</strong> - When tissue similar to the uterine lining grows outside the uterus
              </li>
              <li>
                <strong>Perimenopause and Menopause</strong> - The natural transition to the end of reproductive years
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tracking Symptoms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Menstrual Cycle</h3>
                <p className="text-sm text-muted-foreground">
                  Track period dates, flow, and symptoms to identify patterns
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Energy Levels</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor fatigue, energy fluctuations throughout the month
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Mood Changes</h3>
                <p className="text-sm text-muted-foreground">
                  Record mood swings, anxiety, depression, or irritability
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Physical Symptoms</h3>
                <p className="text-sm text-muted-foreground">
                  Document acne, hair changes, weight fluctuations, sleep quality
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pcos">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pcos">PCOS</TabsTrigger>
          <TabsTrigger value="thyroid">Thyroid Health</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
        </TabsList>
        <TabsContent value="pcos" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Polycystic Ovary Syndrome (PCOS)</h3>
          <p className="mb-3">
            PCOS affects approximately 1 in 10 women of childbearing age. It's characterized by:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Activity className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>Irregular or missed periods due to infrequent or no ovulation</span>
            </li>
            <li className="flex items-start gap-2">
              <Activity className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>Higher than normal levels of androgens (male hormones)</span>
            </li>
            <li className="flex items-start gap-2">
              <Activity className="h-5 w-5 text-primary mt-1 shrink-0" />
              <span>Multiple small cysts on the ovaries</span>
            </li>
          </ul>
          <h4 className="font-medium mt-4">Common Symptoms</h4>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Irregular periods or no periods</li>
            <li>Difficulty getting pregnant</li>
            <li>Excessive hair growth (hirsutism)</li>
            <li>Weight gain or difficulty losing weight</li>
            <li>Thinning hair or hair loss from the head</li>
            <li>Acne or oily skin</li>
          </ul>
        </TabsContent>
        <TabsContent value="thyroid" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Thyroid Health</h3>
          <p className="mb-3">
            The thyroid gland produces hormones that regulate metabolism, energy, and mood. Thyroid disorders include:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Hypothyroidism (Underactive Thyroid)</h4>
              <p className="text-sm text-muted-foreground mb-2">When the thyroid doesn't produce enough hormones</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fatigue and weakness</li>
                <li>Weight gain</li>
                <li>Cold sensitivity</li>
                <li>Dry skin and hair</li>
                <li>Depression</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Hyperthyroidism (Overactive Thyroid)</h4>
              <p className="text-sm text-muted-foreground mb-2">When the thyroid produces too much hormone</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Weight loss despite increased appetite</li>
                <li>Rapid heartbeat</li>
                <li>Anxiety and irritability</li>
                <li>Heat sensitivity</li>
                <li>Sleep problems</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="management" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Managing Hormonal Health</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Lifestyle Approaches</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <Activity className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Regular Exercise</p>
                    <p className="text-sm text-muted-foreground">
                      Aim for 150 minutes of moderate activity weekly
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Balanced Diet</p>
                    <p className="text-sm text-muted-foreground">
                      Focus on whole foods, limit processed foods and sugar
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Stress Management</p>
                    <p className="text-sm text-muted-foreground">
                      Practice meditation, yoga, or other relaxation techniques
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Medical Approaches</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Hormone Therapy</p>
                    <p className="text-sm text-muted-foreground">
                      Including birth control pills, thyroid medication, or HRT
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Regular Monitoring</p>
                    <p className="text-sm text-muted-foreground">
                      Blood tests to check hormone levels and adjust treatment
                    </p>
                  </div>
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
          or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </div>
    </div>
  )
}
