'use client'

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl ">
      <div className="grid md:grid-cols-3 gap-8">
        {/* MVP Development Package Card */}
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
            <h2 className="text-2xl font-bold mb-2 text-gray-800">MVP Development Package</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-800">Starting at $1997</span>
            </div>
            <p className="text-red-600 mb-8">20% off for early adopters</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">What's Included:</h3>
              <ul className="space-y-4">
                {[
                  "Complete MVP development in 2-3 weeks",
                  "Web application/ Mobile App",
                  "Modern, scalable tech stack",
                  "Seamless integrations (payments, auth, etc.)",
                  "30 days of free maintenance",
                  "Personalized, founder-led development",
                  "Regular updates and transparent process"
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
          
          <div className="space-y-4">
            <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 rounded-xl py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Now →
            </Button>
            <Button variant="outline" className="w-full text-white-800 border-gray-800 hover:bg-gray-800 hover:text-white rounded-xl py-4 text-sm transition-all duration-300">
              View Details
            </Button>
          </div>
        </Card>

        {/* Startup Booster Package Card */}
        <Card className="relative bg-black rounded-3xl p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 border border-gray-700">
          <div>
            <div className="inline-block bg-white text-black px-4 py-1.5 rounded-full text-sm mb-6 shadow-lg">
              Quarterly Plan
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white">Startup Booster Package</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$4997/quarter</span>
            </div>
            <p className="text-gray-400 mb-8">Billed quarterly, 3-month minimum</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">What's Included:</h3>
              <ul className="space-y-4">
                {[
                  "120 hours of development time per quarter",
                  "Bi-weekly strategy calls",
                  "Priority bug fixes and feature updates",
                  "Quarterly performance review",
                  "Dedicated project manager",
                  "Scalability planning and implementation",
                  "24/7 emergency support"
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
          
          <div className="space-y-4">
            <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-xl py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey →
            </Button>
            <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-black rounded-xl py-4 text-sm transition-all duration-300">
              View Details
            </Button>
          </div>
        </Card>

        {/* Growth Retainer Package Card */}
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
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Growth Retainer Package</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-800">$2497/month</span>
            </div>
            <p className="text-gray-600 mb-8">No commitment, cancel anytime</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Dedicated Monthly Services:</h3>
              <ul className="space-y-4">
                {[
                  "60 hours of development time per month",
                  "Flexible hours allocation",
                  "Weekly strategy calls",
                  "Priority feature development",
                  "Continuous maintenance & optimization",
                  "Same-day emergency support"
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
          
          <div className="space-y-4">
            <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 rounded-xl py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule a Call →
            </Button>
            <Button variant="outline" className="w-full text-white-800 border-gray-800 hover:bg-gray-800 hover:text-white rounded-xl py-4 text-sm transition-all duration-300">
              View Details
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}