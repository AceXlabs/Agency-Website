
"use client";

import React, { useRef } from "react";
import { MarqueeDemoVertical } from "@/components/farmui/Scrolls";
import GradualSpacing from "@/components/farmui/GradualSpacing";
import { useInView } from "framer-motion";
import {
  TopLeftShiningLight,
  TopRightShiningLight,
} from "@/components/farmui/ShinyLights";
import Container from "../Container";

export default function FUIDarkHeroSectionWithScrolls() {
 
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <TopRightShiningLight />
      <TopLeftShiningLight />
      <div className="absolute inset-0 h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    <Container >
      <div className="relative h-screen">
      <div className="flex flex-col md:flex-row justify-between h-full items-center">
      
          <div ref={ref} className="mx-auto max-sm:max-w-[400px]">
            <GradualSpacing
              textClassName="justify-start"
              visiblity={isInView}
              className="max-w-[400px] text-4xl font-normal tracking-tighter text-transparent text-white sm:text-7xl font-geist"
              text={"A design conference"}
              />
            <GradualSpacing
              textClassName="justify-start"
              visiblity={isInView}
              className="max-w-[400px] text-3xl font-normal tracking-tighter text-transparent text-white sm:text-7xl font-geist"
              text={"for a dark side"}
              />
            
    
            <div className="mt-6 space-y-6 tracking-tight text-gray-500 sm:text-xl font-geist text-md">
              <p>
                The next generation of web users are tech-savvy and suspicious.
                They know how to use dev tools, they can detect a phishing scam
                from a mile away, and they certainly aren’t accepting any checks
                from Western Union.
              </p>
              <p>
                At DeceptiConf you’ll learn about the latest dark patterns being
                developed to trick even the smartest visitors, and you’ll learn
                how to deploy them without ever being detected.
              </p>
            </div>
            <button className="flex gap-2 justify-center items-center py-2 px-10 mt-5 text-lg tracking-tighter text-center bg-gradient-to-br rounded-xl ring-2 ring-offset-2 transition-all hover:ring-transparent group/button w-fit from-zinc-100 to-zinc-300 font-geist text-md text-zinc-900 ring-zinc-500/80 ring-offset-zinc-950 hover:scale-[1.02] active:scale-[0.98] active:ring-zinc-500/70">
              Get Started
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:[animation-delay:.2s] group-hover/button:animate-shineButton rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.7),75%,transparent)]"
                />
            </button>
            <dl className="grid grid-cols-2 gap-y-6 gap-x-10 mt-10 sm:gap-y-10 sm:gap-x-16 sm:mt-16 sm:text-center lg:grid-cols-none lg:grid-flow-col lg:auto-cols-auto lg:justify-start lg:text-left">
              {[
                ["Speakers", "18"],
                ["People Attending", "2,091"],
                ["Venue", "Staples Center"],
                ["Location", "Los Angeles"],
              ].map(([name, value]) => (
                <div key={name}>
                  <dt className="font-mono text-sm text-gray-300">{name}</dt>
                  <dd className="mt-0.5 text-2xl font-normal tracking-tight text-gray-300 font-geist">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
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


