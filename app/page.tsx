
import Accordian from "@/components/main/accordian/Accordian";
import { Bottom } from "@/components/main/bottom/Bottom";
import ContactPage from "@/components/main/contact/Contact";
import HeroSection from "@/components/main/hero/Hero";
import PricingSection from "@/components/Pricing/PricingSection";

import Services from "@/components/main/services/Services";
import TeamPage from "@/components/main/team/Team";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <Accordian/> */}
      <TeamPage/>
      <PricingSection/>

      <Services />
      <ContactPage/>
      {/* <Bottom/> */}
    </div>
  );
}
