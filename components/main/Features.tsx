"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FeatureObjects } from "./FeatureObjects";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
export default function Features() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=" flex flex-col lg:flex-row overflow-hidden items-center justify-center w-full gap-4 mx-auto px-8 relative "
    >
      <section className="py-14 relative  z-50">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-400 md:px-8 ">
          <div className="relative max-w-2xl mx-auto sm:text-center">
            <div className="relative z-10">
              <h3 className="text-gray-200 mt-4 text-3xl font-normal font-geist tracking-tighter md:text-5xl sm:text-4xl">
                Let’s help power your SaaS
              </h3>
              <p className="mt-3 font-geist text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                congue, nisl eget molestie varius, enim ex faucibus purus.
              </p>
            </div>
          </div>
          <hr className="bg-white/30 h-px w-1/2 mx-auto  mt-5" />
          <div className="relative mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {FeatureObjects.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-transparent transform-gpu border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  space-y-3 p-4 border rounded-xl"
                >
                  <div className="text-white rounded-full p-4 transform-gpu border  [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-300 font-bold font-geist tracking-tighter">
                    {item.title}
                  </h4>
                  <p className="text-gray-500">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={10}
              containerClassName="bg-transparent"
              colors={[
                // [59, 130, 246],
                // [139, 92, 246],
                [255, 255, 255],
                [255, 255, 255],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={0.3}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-background/50 dark:bg-background/90" />
    </div>
  );
}
