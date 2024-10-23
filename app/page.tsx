
import Accordian from "@/components/Accordian";
import AccordionItem from "@/components/AccordianItem";
import ContactPage from "@/components/Contatc";
import HeroSection from "@/components/main/Hero";

import Services from "@/components/Services";
import TeamPage from "@/components/Team";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <Services />
      <Accordian/>
      <TeamPage/>
      <ContactPage/>
    

    </>
  );
}
