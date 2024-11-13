"use client";
import Container from "../shared/Container";
import {
  TopLeftShiningLight,
  TopRightShiningLight,
} from "../farmui/ShinyLights";
import { useRef } from "react";
import { Hero } from "./Hero";
import { TeamSection } from "./TeamSection";
import { teamData } from "@/data/process";
import { useInView } from "framer-motion";


export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <TopLeftShiningLight />
      <TopRightShiningLight />
      <div className="absolute inset-0 h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <Container>
        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between h-full items-center mx-auto">
            <div ref={ref} className="mx-auto max-sm:max-w-[400px] md:mt-10">
              <Hero isInView={isInView}/>
              <TeamSection teamData={teamData}/>
            </div>

            <div className="absolute right-0 bottom-0 left-0 mx-auto opacity-20"></div>
          </div>
        </div>
      </Container>
    </>
  );
}
