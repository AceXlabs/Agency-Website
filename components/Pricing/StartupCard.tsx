import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { trackEvent } from "@/lib/analytics";

export const StartupCard = () => {
  const handlePricingBtn = () => {
    trackEvent("Pricing Button Pressed", {
      PricingType: "Quarterly Plan",
      Platform: navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop",
    });
  };
  return (
    <Card className="relative bg-black rounded-3xl p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 border border-gray-700">
      <div>
        <div className="inline-block bg-white text-black px-4 py-1.5 rounded-full text-sm mb-6 shadow-lg">
          Quarterly Plan
        </div>
        <h2 className="text-2xl font-bold mb-2 text-white">
          Startup Booster Package
        </h2>
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">$4997/quarter</span>
        </div>
        <p className="text-gray-400 mb-8">Billed quarterly, 3-month minimum</p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">
            What&apos;s Included:
          </h3>
          <ul className="space-y-4">
            {[
              "120 hours of development time per quarter",
              "Bi-weekly strategy calls",
              "Priority bug fixes and feature updates",
              "Quarterly performance review",
              "Dedicated project manager",
              "Scalability planning and implementation",
              "24/7 emergency support",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1 shadow-md">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link href="https://cal.com/acex-labs" target="_blank">
        <div className="space-y-4">
          <Button
            onClick={handlePricingBtn}
            className="w-full bg-white text-black hover:bg-gray-200 rounded-xl py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey →
          </Button>
        </div>
      </Link>
    </Card>
  );
};
