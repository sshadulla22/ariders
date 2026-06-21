"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function TrustBanner() {
  const marqueeItems = [
    "Delivering Trust",
    "Connecting Futures",
    "100% Verified Partners",
    "Zero Hidden Fees",
    "Live GPS Tracking",
    "Hyperlocal Specialists",
    "Transparent 80/20 Split"
  ];

  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="bg-navy py-10 overflow-hidden relative border-y border-white/10">
      
      {/* Edge Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />

      {/* CSS Marquee Track */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex items-center gap-8 px-4 animate-marquee">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-tighter cursor-default">
                {item}
              </span>
              <Sparkles className="w-8 h-8 text-brand-green opacity-80 shrink-0" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
