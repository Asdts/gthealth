"use client";

import { FeatureCard } from "@/components/featureCard";
import { Activity, Baby, Shield, HelpCircle, Check } from "lucide-react";

export default function FemaleCard() {
  return (
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
        description="Comprehensive support throughout pregnancy and postpartum."
        link="/health/postpartum"
      />
      <FeatureCard
        icon={<Activity className="h-6 w-6" />}
        title="Exercise"
        description="Customized workout routines for women's fitness needs."
        link="/fitness/female"
      />
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
        icon={<Check className="h-6 w-6" />}
        title="Anonymous Help"
        description="Confidential support for sensitive health topics."
        link="/support/anonymous"
      />
    </div>
  );
}