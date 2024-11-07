"use client";
import { useEffect } from "react";
import ContactPage from "@/components/main/contact/Contact";
import HeroSection from "@/components/main/hero/Hero";
import PricingSection from "@/components/Pricing/PricingSection";

import Services from "@/components/main/services/Services";
import TeamPage from "@/components/main/team/Team";
import { analyticsInit, trackEvent } from "@/lib/analytics";

export default function Home() {
  useEffect(() => {
    analyticsInit();
    trackEvent("HomePage Viewed", {});
  }, []);

  return (
    <>
      <HeroSection />
      {/* <Accordian/> */}
      <TeamPage />
      <PricingSection />
      <Services />
      <ContactPage />
      {/* <Bottom/> */}
    </>
  );
}
