"use client";

import React from "react";
import { HeroSection } from "@/components/hero-section";
import { BenefitsSection } from "@/components/benefits-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { WaitlistSection } from "@/components/waitlist-section";
import { Footer } from "@/components/footer";
import { ValueProposition } from "@/components/value-proposition";
import { FAQSection } from "@/components/faq-section";

export default function MovrrLanding() {
  const handleJoinWaitlist = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      <ValueProposition />
      {/* <BenefitsSection /> */}
      <HowItWorksSection />
      <FAQSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
