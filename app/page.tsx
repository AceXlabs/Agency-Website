
import Accordian from "@/components/Accordian";
import { Bottom } from "@/components/Bottom";
import ContactPage from "@/components/Contact";
import HeroSection from "@/components/main/Hero";
import PricingSection from "@/components/Pricing/PricingSection";

import Services from "@/components/Services";
import TeamPage from "@/components/Team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Accordian/>
      <TeamPage/>
      <PricingSection/>
      <ContactPage/>
      <Bottom/>
    </>
  );
}
