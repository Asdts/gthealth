/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming Button is a custom ShadCN component
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Assuming these are from ShadCN UI
import { Card } from "@/components/ui/card"; // Assuming Card is a custom component from ShadCN
import ManCards from "./ManCards";
import FemaleCard from "./FemaleCard";
import MedicalAnalyzer from "@/components/medicalAnalyzer";

const MainLogin = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Your Complete Health Companion
          </h1>
          <p className="text-lg text-muted-foreground max-w-[46rem] sm:text-xl">
            Personalized health insights, medical report analysis, and gender-specific care recommendations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Personalized Health Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-[46rem]">
            Tailored health solutions for everyone with gender-specific care options.
          </p>
        </div>

        {/* ShadCN Tabs */}
        <Tabs defaultValue="all" className="mt-12 w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 gap-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Features
            </TabsTrigger>
            <TabsTrigger value="male" onClick={() => setActiveTab("male")}>
              Male Health
            </TabsTrigger>
            <TabsTrigger value="female" onClick={() => setActiveTab("female")}>
              Female Health
            </TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="mt-6">
              {activeTab === "all" && <div className="space-y-6">
                <ManCards/>
                <FemaleCard/></div>}
              {activeTab === "male" && <ManCards/> }
              {activeTab === "female" && <FemaleCard/>}
          </TabsContent>
        </Tabs>
      </section>

      {/* Medical Analyzer Section */}
      <MedicalAnalyzer/>
    </main>
  );
};

export default MainLogin;
