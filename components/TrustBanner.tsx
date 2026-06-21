"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

  // We duplicate the items to create a seamless infinite loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="bg-navy py-10 overflow-hidden relative border-y border-white/10 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
      
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1035] }} // Adjust based on content width, magic number that works well for this string length
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          className="flex items-center gap-8 px-4"
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-tighter hover:text-brand-green transition-colors cursor-default">
                {item}
              </span>
              <Sparkles className="w-8 h-8 text-brand-green opacity-80" />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
