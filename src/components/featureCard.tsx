/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import Link from "next/link";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

export function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {link ? (
          <Link href={link} className="w-full">
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </Link>
        ) : (
          <Button variant="outline" className="w-full" disabled>
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}