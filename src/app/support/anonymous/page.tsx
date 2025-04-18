import Link from "next/link"
import { ArrowLeft, Lock, Shield, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AnonymousSupportPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Anonymous Medical Support</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              <CardTitle>Confidential Assistance</CardTitle>
            </div>
            <CardDescription>
              Get discreet help for sensitive health concerns without revealing your identity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our anonymous support service allows you to discuss sensitive health issues with qualified healthcare
              professionals without revealing your personal information. All communications are encrypted and your
              privacy is our top priority.
            </p>

            <div className="bg-primary/5 p-4 rounded-md flex items-start gap-3 mt-4">
              <Shield className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Privacy Guarantee</h3>
                <p className="text-sm">
                  We do not store personal identifiers, IP addresses, or any information that could be used to identify
                  you. Your conversations are automatically deleted after 30 days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center text-primary font-medium shrink-0">
                1
              </div>
              <p className="text-sm">Submit your question anonymously through our secure form</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center text-primary font-medium shrink-0">
                2
              </div>
              <p className="text-sm">A qualified healthcare professional reviews your inquiry</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center text-primary font-medium shrink-0">
                3
              </div>
              <p className="text-sm">Receive a response within 24 hours through our secure platform</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center text-primary font-medium shrink-0">
                4
              </div>
              <p className="text-sm">Follow up with additional questions if needed</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ask">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ask">Ask a Question</TabsTrigger>
          <TabsTrigger value="faq">Common Questions</TabsTrigger>
        </TabsList>
        <TabsContent value="ask" className="p-4 border rounded-md mt-2">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Submit Your Question</h3>
            <p className="text-sm text-muted-foreground">
              Your question will be answered by a qualified healthcare professional. No personal information is
              required.
            </p>
            <div className="space-y-4 mt-4">
              <Textarea placeholder="Type your health question here..." className="min-h-[150px]" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  <span>End-to-end encrypted</span>
                </div>
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Anonymously
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="faq" className="p-4 border rounded-md mt-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this service really anonymous?</AccordionTrigger>
              <AccordionContent>
                Yes. We do not collect any personally identifiable information. We use advanced encryption and privacy
                technologies to ensure your identity remains protected. We don't track IP addresses or require any login
                information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who answers my questions?</AccordionTrigger>
              <AccordionContent>
                All questions are answered by licensed healthcare professionals including doctors, nurses, and
                specialists. Each professional has undergone verification and specializes in men's health issues.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How quickly will I get a response?</AccordionTrigger>
              <AccordionContent>
                Most questions receive a response within 24 hours. For more complex inquiries, it may take up to 48
                hours to ensure you get the most accurate information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is this a substitute for seeing a doctor?</AccordionTrigger>
              <AccordionContent>
                No. This service provides information and guidance but is not a replacement for in-person medical care.
                For emergencies or serious health concerns, please visit a healthcare provider immediately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I follow up on my question?</AccordionTrigger>
              <AccordionContent>
                Yes. Each submission generates a unique anonymous ID that you can use to follow up on your question.
                This ID is only known to you and allows for continued conversation without revealing your identity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Important:</strong> If you're experiencing a medical emergency, please call emergency services
          immediately. This service is not intended for emergency situations.
        </p>
      </div>
    </div>
  )
}
