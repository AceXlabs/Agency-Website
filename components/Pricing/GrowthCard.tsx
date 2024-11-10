import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export const GrowthCard = () => {
  const handlePricingBtn = () => {
    trackEvent("Pricing Button Pressed", {
      PricingType: "Monthly Retainer",
      Platform: navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop",
    });
  };
  return (
    <Card className="relative bg-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 border border-gray-200">
      <div>
        <div className="absolute -top-3 left-6">
          <span className="bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm shadow-lg">
            Ongoing Support
          </span>
        </div>
        <div className="inline-block bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm mb-6 shadow-lg">
          Monthly Retainer
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Growth Retainer Package
        </h2>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-800">$2497/month</span>
        </div>
        <p className="text-gray-600 mb-8">No commitment, cancel anytime</p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Dedicated Monthly Services:
          </h3>
          <ul className="space-y-4">
            {[
              "60 hours of development time per month",
              "Flexible hours allocation",
              "Weekly strategy calls",
              "Priority feature development",
              "Continuous maintenance & optimization",
              "Same-day emergency support",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-gray-800 rounded-full p-1 shadow-md">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link href="https://cal.com/acex-labs" target="_blank">
        <div className="space-y-4">
          <Button
            onClick={handlePricingBtn}
            className="w-full bg-gray-800 text-white hover:bg-gray-700 rounded-xl py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Call →
          </Button>
        </div>
      </Link>
    </Card>
  );
};
