"use client";

import React, { useRef } from "react";
import { MarqueeDemoVertical } from "@/components/farmui/Scrolls";
import GradualSpacing from "@/components/farmui/GradualSpacing";
import { useInView } from "framer-motion";
import {
  TopLeftShiningLight,
  TopRightShiningLight,
} from "@/components/farmui/ShinyLights";
import Container from "../../shared/Container";
import Link from "next/link";
import { ShareYourVision } from "../share-your-vision";
import { trackEvent } from "@/lib/analytics";

export default function FUIDarkHeroSectionWithScrolls() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleBookCall = () => {
    trackEvent("Book Call Pressed", {
      ButtonLocation: "HeroSection",
      Platform: navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop",
    });
  };

  return (
    <>
      <TopRightShiningLight />
      <TopLeftShiningLight />
      <div className="absolute inset-0 h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <Container>
        <div className="relative md:h-full">
          <div className="flex flex-col md:flex-row justify-between h-full items-start">
            <div
              ref={ref}
              className="mx-auto max-sm:max-w-[400px] max-sm:mt-12 lg:mt-[8rem]"
            >
              <GradualSpacing
                textClassName="justify-start"
                visiblity={isInView}
                className="max-w-[400px] text-3xl font-normal tracking-tighter text-transparent text-white sm:text-7xl font-geist"
                text={"From Concept to Creation"}
              />
              <GradualSpacing
                textClassName="justify-start"
                visiblity={isInView}
                className="max-w-[400px] text-2xl font-normal tracking-tighter text-transparent text-white sm:text-7xl font-geist"
                text={"Making Ideas Happen"}
              />

              <div className="mt-6 space-y-6 tracking-tight text-gray-500 sm:text-xl font-geist text-md">
                <p>
                  From sleek websites to scalable SaaS platforms and innovative
                  MVPs, we specialize in building with JavaScript, Golang, Rust,
                  and Web3 technologies.
                </p>
                <p>
                  Whether you need robust web applications or blockchain-powered
                  products, our agency is your go-to partner in turning concepts
                  into impactful digital experiences.
                </p>
              </div>
              <div className="flex max-sm:flex-col md:gap-4">
                <Link href="https://cal.com/acex-labs" target="_blank">
                  <button
                    onClick={handleBookCall}
                    className="flex gap-2 justify-center items-center py-2 px-10 mt-5 text-lg tracking-tighter text-center bg-gradient-to-br rounded-xl ring-2 ring-offset-2 transition-all hover:ring-transparent group/button w-fit from-zinc-100 to-zinc-300 font-geist text-md text-zinc-900 ring-zinc-500/80 ring-offset-zinc-950 hover:scale-[1.02] active:scale-[0.98] active:ring-zinc-500/70 max-md:mr-4"
                  >
                    Book a call
                  </button>
                </Link>
                <ShareYourVision />
              </div>
            </div>

            <div className="hidden  md:block ">
              <MarqueeDemoVertical />
            </div>
          </div>
          <div className="absolute right-0 bottom-0 left-0 mx-auto opacity-20"></div>
        </div>
      </Container>
    </>
  );
}
