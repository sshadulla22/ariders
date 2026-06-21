"use client";

import React from "react";
import { Check, ShieldCheck, HeartHandshake, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyPricingWorks() {
  const points = [
    {
      title: "Affordable for Businesses & Customers",
      desc: "Low distance-based pricing lets you keep product margins high and customer shipping charges low.",
    },
    {
      title: "Fair & Attractive Earnings for Riders",
      desc: "An industry-leading 80% payout model keeps riders motivated, highly satisfied, and prompt on the road.",
    },
    {
      title: "Transparent with No Hidden Charges",
      desc: "No base subscriptions, admin registration fees, or platform fees. The price you see is the price you pay.",
    },
    {
      title: "Surge Pricing Ensures Rider Availability",
      desc: "Dynamic surge during peak traffic and rain guarantees riders are compensated for extra travel efforts.",
    },
    {
      title: "Sustainable Long-Term Business Model",
      desc: "Balanced unit economics allow the platform to innovate and maintain top-tier infrastructure for all.",
    },
  ];

  return (
    <section className="py-20 bg-light-gray/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Copy (Col span 5) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-xs font-extrabold text-brand-green uppercase tracking-wider block">
              Economic Stability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Why Our <br className="hidden lg:block" /> Pricing Works
            </h2>
            <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
              We have designed a sustainable logistics model that balances customer affordability, driver profitability, and platform growth. By removing rider hiring friction, we align incentives for all parties.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 px-4 py-2 rounded-xl text-navy text-xs font-bold">
              <HeartHandshake className="w-4 h-4 text-brand-green" />
              <span>Cooperative Logistics Ecosystem</span>
            </div>
          </div>

          {/* Right Side: Checklist Grid (Col span 7) */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 group"
              >
                {/* Check Circle */}
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-navy text-sm sm:text-base group-hover:text-brand-green transition-colors duration-300">
                    {point.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
