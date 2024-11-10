import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export const MvpCard = () => {
  const handlePricingBtn = () => {
    trackEvent("Pricing Button Pressed", {
      PricingType: "One Time",
      Platform: navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop",
    });
  };
  return (
    <Card className="relative bg-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 border border-gray-200">
      <div>
        <div className="absolute -top-3 left-6">
          <span className="bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
            Most Popular
          </span>
        </div>
        <div className="inline-block bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm mb-6 shadow-lg">
          One time
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          MVP Development Package
        </h2>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-800">
            Starting at $1997
          </span>
        </div>
        <p className="text-red-600 mb-8">20% off for early adopters</p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            What&apos;s Included:
          </h3>
          <ul className="space-y-4">
            {[
              "Complete MVP development in 2-3 weeks",
              "Web application/ Mobile App",
              "Modern, scalable tech stack",
              "Seamless integrations (payments, auth, etc.)",
              "30 days of free maintenance",
              "Personalized, founder-led development",
              "Regular updates and transparent process",
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
            Get Started Now →
          </Button>
        </div>
      </Link>
    </Card>
  );
};
