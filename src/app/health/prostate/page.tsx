import Link from "next/link"
import { ArrowLeft, Shield, Calendar, FileText, Activity } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProstateHealthPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Prostate Health</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Understanding Prostate Health</CardTitle>
            <CardDescription>
              The prostate is a small gland in men that produces seminal fluid.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The prostate is a walnut-sized gland located between the bladder and the penis. 
              It surrounds the urethra, the tube that carries urine and semen out of the body.
              As men age, the prostate can become larger or develop various conditions that 
              require attention.
            </p>
            <h3 className="text-lg font-medium mt-4">Common Prostate Conditions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Benign Prostatic Hyperplasia (BPH) - Enlarged prostate</li>
              <li>Prostatitis - Inflammation of the prostate</li>
              <li>Prostate Cancer - Malignant tumor of the prostate</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Screenings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Ages 40-49</h3>
                <p className="text-sm text-muted-foreground">
                  Discuss PSA testing with your doctor if you have risk factors
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Ages 50-69</h3>
                <p className="text-sm text-muted-foreground">
                  Consider regular PSA testing and digital rectal exams
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Ages 70+</h3>
                <p className="text-sm text-muted-foreground">
                  Discuss continued screening with your healthcare provider
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="prevention">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="prevention">Prevention</TabsTrigger>
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="treatments">Treatments</TabsTrigger>
        </TabsList>
        <TabsContent value="prevention" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Preventive Measures</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Activity className="h-5 w-5 text-green-500 mt-1 shrink-0" />
              <span>Regular exercise and maintaining a healthy weight</span>
            </li>
            <li className="flex items-start gap-2">
              <FileText className="h-5 w-5 text-green-500 mt-1 shrink-0" />
              <span>Diet rich in fruits, vegetables, and whole grains</span>
            </li>
            <li className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-green-500 mt-1 shrink-0" />
              <span>Limiting alcohol consumption and not smoking</span>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="symptoms" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Common Symptoms</h3>
          <ul className="space-y-2">
            <li>Frequent urination, especially at night</li>
            <li>Difficulty starting or stopping urination</li>
            <li>Weak or interrupted urine flow</li>
            <li>Pain or burning during urination</li>
            <li>Blood in urine or semen</li>
            <li>Pain in the lower back, hips, or thighs</li>
          </ul>
        </TabsContent>
        <TabsContent value="treatments" className="p-4 border rounded-md mt-2">
          <h3 className="text-lg font-medium mb-3">Treatment Options</h3>
          <p className="mb-3">Treatment depends on the specific condition and its severity:</p>
          <ul className="space-y-2">
            <li><strong>BPH:</strong> Medications, minimally invasive procedures, or surgery</li>
            <li><strong>Prostatitis:</strong> Antibiotics, anti-inflammatory drugs, and lifestyle changes</li>
            <li><strong>Prostate Cancer:</strong> Active surveillance, surgery, radiation therapy, hormone therapy</li>
          </ul>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Disclaimer:</strong> This information is for educational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </div>
    </div>
  )
}
