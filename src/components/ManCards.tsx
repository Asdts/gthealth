"use client";

import { FeatureCard } from "@/components/featureCard";
import { Shield, Activity, HelpCircle } from "lucide-react";

export default function ManCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        icon={<Shield className="h-6 w-6" />}
        title="Prostate Health"
        description="Monitoring and recommendations for prostate health."
        link="/health/prostate"
      />
      <FeatureCard
        icon={<Activity className="h-6 w-6" />}
        title="Workout & Fitness"
        description="Tailored fitness plans for male physiology and goals."
        link="/fitness/male"
      />
      <FeatureCard
        icon={<HelpCircle className="h-6 w-6" />}
        title="Anonymous Medical Support"
        description="Discreet assistance for sensitive health concerns."
        link="/support/anonymous"
      />
    </div>
  );
}