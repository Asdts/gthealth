import Link from "next/link"
import { ArrowLeft, Calendar, FileText, AlertCircle, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BreastHealthPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Breast Health</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Breast Health Awareness</CardTitle>
            <CardDescription>
              Resources and education for maintaining breast health and early detection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Breast health is an important aspect of overall wellness for women of all ages. Regular screenings and
              awareness of changes can lead to early detection of breast cancer and other conditions, significantly
              improving treatment outcomes.
            </p>
            <h3 className="text-lg font-medium mt-4">Key Components of Breast Health</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Regular Screenings</strong> - Mammograms, clinical breast exams, and self-exams
              </li>
              <li>
                <strong>Awareness</strong> - Knowing what's normal for your breasts and recognizing changes
              </li>
              <li>
                <strong>Risk Assessment</strong> - Understanding personal risk factors
              </li>
              <li>
                <strong>Healthy Lifestyle</strong> - Diet, exercise, and habits that support breast health
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Screening Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Ages 20-39</h3>
                <p className="text-sm text-muted-foreground">
                  Clinical breast exam every 1-3 years and monthly self-exams
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Ages 40-44</h3>
                <p className="text-sm text-muted-foreground">
                  Optional annual mammogram based on personal risk factors
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Ages 45-54</h3>
                <p className="text-sm text-muted-foreground">
                  Annual mammogram recommended
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Ages 55+</h3>
                <p className="text-sm text-muted-foreground">
                  Mammogram every 1-2 years, continuing as long as in good health
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="awareness">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="awareness">Self-Awareness</TabsTrigger>
          <TabsTrigger value="risk">Risk Factors</TabsTrigger>
          <TabsTrigger value="prevention">Prevention</TabsTrigger>
        </TabsList>
        <TabsContent value="awareness" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Breast Self-Awareness</h3>
          <p className="mb-3">
            Being familiar with how your breasts normally look and feel helps you notice changes that might need medical attention.
          </p>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">How to Perform a Self-Exam</h4>
              <ol className="list-decimal pl-5 space-y-2 mt-2">
                <li>
                  <strong>Visual inspection:</strong> Stand in front of a mirror with your arms at your sides, then raised above your head, looking for changes in size, shape, or contour
                </li>
                <li>
                  <strong>Lying down:</strong> Place a pillow under your right shoulder and right hand behind your head. Use your left hand to examine your right breast in a circular pattern
                </li>
                <li>
                  <strong>Repeat:</strong> Switch sides and repeat the process for your left breast
                </li>
                <li>
                  <strong>In the shower:</strong> Use soapy hands to check for lumps or thickening
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium">What to Look For</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Lumps or thickening in the breast or underarm</li>
                <li>Changes in breast size, shape, or contour</li>
                <li>Dimpling, puckering, or redness of the skin</li>
                <li>Nipple changes (inversion, discharge, rash)</li>
                <li>Persistent pain in one area</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="risk" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Understanding Risk Factors</h3>
          <p className="mb-3">
            Several factors can influence breast cancer risk. Some you can change, others you cannot.
          </p>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">Non-Modifiable Risk Factors</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <strong>Age:</strong> Risk increases with age, with most breast cancers diagnosed after 50
                </li>
                <li>
                  <strong>Genetic mutations:</strong> BRCA1 and BRCA2 gene mutations significantly increase risk
                </li>
                <li>
                  <strong>Family history:</strong> Having a first-degree relative with breast cancer doubles risk
                </li>
                <li>
                  <strong>Personal history:</strong> Previous breast cancer or certain non-cancerous breast conditions
                </li>
                <li>
                  <strong>Dense breast tissue:</strong> Makes mammograms harder to read and slightly increases risk
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Modifiable Risk Factors</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <strong>Physical activity:</strong> Regular exercise can lower risk
                </li>
                <li>
                  <strong>Weight:</strong> Being overweight after menopause increases risk
                </li>
                <li>
                  <strong>Alcohol consumption:</strong> Risk increases with amount of alcohol consumed
                </li>
                <li>
                  <strong>Hormone therapy:</strong> Combined hormone therapy for menopause can increase risk
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="prevention" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Preventive Measures</h3>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium">Lifestyle Choices</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Regular Exercise</p>
                    <p className="text-sm text-muted-foreground">
                      Aim for at least 150 minutes of moderate activity weekly
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Healthy Diet</p>
                    <p className="text-sm text-muted-foreground">
                      Focus on plant-based foods, lean proteins, and healthy fats
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Limit Alcohol</p>
                    <p className="text-sm text-muted-foreground">
                      No more than one alcoholic drink per day
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Medical Approaches</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Regular Screenings</p>
                    <p className="text-sm text-muted-foreground">
                      Follow recommended mammogram schedule for your age and risk level
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Risk Assessment</p>
                    <p className="text-sm text-muted-foreground">
                      Discuss your personal risk factors with your healthcare provider
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
          or other qualified health provider with any questions you may have regarding breast health or a medical condition.
        </p>
      </div>
    </div>
  )
}
