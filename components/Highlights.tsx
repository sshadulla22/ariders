"use client";

import React from "react";
import { Landmark, ShieldAlert, Map, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Highlights() {
  const highlights = [
    {
      title: "Built for Businesses",
      subtitle: "Businesses, Customers & Riders",
      description: "A three-way ecosystem optimized to deliver value to businesses, ease-of-use to customers, and fair pay to riders.",
      icon: Landmark,
      color: "from-brand-green/20 to-brand-green/5 text-brand-green",
    },
    {
      title: "Verified Partners",
      subtitle: "Verified & Independent",
      description: "Every delivery partner goes through a multi-step verification and onboarding process to ensure cargo safety and trust.",
      icon: ShieldAlert,
      color: "from-navy/10 to-navy/5 text-navy",
    },
    {
      title: "Full Coverage",
      subtitle: "Mumbai & Navi Mumbai",
      description: "Wide logistics footprint connecting downtown hubs, residential areas, and suburban industrial zones smoothly.",
      icon: Map,
      color: "from-brand-green/20 to-brand-green/5 text-brand-green",
    },
    {
      title: "Technology First",
      subtitle: "Scalable SaaS Platform",
      description: "Advanced dispatch algorithms, route optimization, and tracking mechanisms that scale horizontally with your volumes.",
      icon: Cpu,
      color: "from-navy/10 to-navy/5 text-navy",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-extrabold text-brand-green uppercase tracking-wider block">
              Key Highlights
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              ARiders at a Glance
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm font-medium leading-relaxed">
            We merge cutting-edge dispatching software with on-the-ground operational excellence to power your city-wide logistics.
          </p>
        </div>

        {/* Highlights Row/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-light-gray/40 rounded-[20px] p-6 border border-gray-100 hover:border-brand-green/20 hover:bg-white shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Panel */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Category / Subtitle */}
                  <span className="text-[10px] font-extrabold text-brand-green uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link arrow indicator */}
                <div className="mt-8 flex items-center justify-end">
                  <div className="w-8 h-8 rounded-full bg-navy/5 group-hover:bg-brand-green group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
