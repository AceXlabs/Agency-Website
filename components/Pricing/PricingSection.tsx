'use client'

import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import { MvpCard } from "./MvpCard"
import { StartupCard } from "./StartupCard"
import { GrowthCard } from "./GrowthCard"
import Topic from "../shared/Topic"

export default function Component() {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl pt-[10rem]">
      <div className="relative flex flex-col items-center md:flex-row">
        <Topic
          title="Pricing"
          description="Transparent, Tailored, and Flexible Pricing to Drive Your Vision Forward"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* MVP Development Package Card rand*/}
        <MvpCard/>
        {/* Startup Booster Package Card */}
        <StartupCard/>
        {/* Growth Retainer Package Card */}
        <GrowthCard/>
      </div>
      { currentPath === '/' &&
      <div className="mx-auto flex justify-center items-center">
        <Button variant="outline" className="w-auto mt-12 text-white border-white hover:bg-white hover:text-black rounded-xl py-4 px-8 text-sm transition-all duration-300"
        onClick={()=>{
          router.push("/pricing");
        }}>
              View Details
            </Button>
            </div>
}
    </div>
  )
}
