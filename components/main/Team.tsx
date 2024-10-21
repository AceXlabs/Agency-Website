/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TeamMembers } from "./TeamMembers";

export default function Team () {

  return (
    <section className="py-14 relative  ">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-400 md:px-8 ">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="text-gray-200 mt-4 text-3xl font-normal font-geist tracking-tighter md:text-5xl sm:text-4xl max-sm:text-center">
              Meet Our Team
            </h3>
            <p className="mt-3 font-geist text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus.
            </p>
          </div>
        </div>
        <hr className="bg-white/30 h-px w-1/2 mx-auto  mt-5"/>
        <div className="relative mt-12">
          <ul className="grid gap-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-10/12 mx-auto justify-items-center">
            {TeamMembers.map((item, idx) => (
              <li
                key={idx}
                className="justify-items-start bg-transparent transform-gpu px-4 py-10rounded-xl w-[200px]"
              >
                <div className="text-white rounded-xl transform-gpu border  [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit overflow-hidden">{item.icon}</div>
                <h4 className="text-lg text-gray-300 font-bold font-geist tracking-tighter mt-4">
                  {item.title}
                </h4>
                <p className="text-gray-500 break-all">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center"> 
        <button className="flex gap-2 justify-center items-center py-2 px-10 mt-5 text-lg tracking-tighter text-center bg-gradient-to-br rounded-xl ring-2 ring-offset-2 transition-all hover:ring-transparent group/button w-fit from-zinc-100 to-zinc-300 font-geist text-md text-zinc-900 ring-zinc-500/80 ring-offset-zinc-950 hover:scale-[1.02] active:scale-[0.98] active:ring-zinc-500/70">
              View All Members
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:[animation-delay:.2s] group-hover/button:animate-shineButton rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.7),75%,transparent)]"
              />
            </button>
        </div>
      </div>
    </section>
  );
}

      