"use client";

import React from "react";
import { UserMinus, Wallet, Clock, Network, IndianRupee, Smartphone, ArrowRight } from "lucide-react";


export default function WhyARiders() {
  const features = [
    {
      title: "Zero Rider Management",
      description: "Skip the hiring, training, and managing. Focus purely on growing your business while we handle all your delivery operations end-to-end.",
      icon: UserMinus,
      spanClass: "md:col-span-2 lg:col-span-2",
      theme: "light", // white
    },
    {
      title: "Technology-Powered Dispatch",
      description: "Our proprietary smart routing algorithms and automated dispatch system ensure every order is assigned to the most optimal rider in milliseconds.",
      icon: Smartphone,
      spanClass: "md:col-span-2 lg:col-span-4",
      theme: "dark", // navy
    },
    {
      title: "Live GPS Tracking",
      description: "Provide your customers with exact live tracking links. Keep everyone informed with real-time ETA updates and delivery status notifications.",
      icon: Clock,
      spanClass: "md:col-span-2 lg:col-span-3",
      theme: "accent", // green
    },
    {
      title: "Infinitely Scalable",
      description: "Whether you have 10 orders a day or 1,000, our on-demand network scales instantly to handle your peak volume without breaking a sweat.",
      icon: Network,
      spanClass: "md:col-span-2 lg:col-span-3",
      theme: "light",
    },
    {
      title: "Radically Transparent Pricing",
      description: "Pay competitive, purely distance-based rates. We have eliminated all hidden charges, surge pricing surprises, and subscription fees.",
      icon: IndianRupee,
      spanClass: "md:col-span-2 lg:col-span-4",
      theme: "light",
    },
    {
      title: "Pay Per Delivery",
      description: "Convert fixed overheads into variable costs. Pay strictly for completed deliveries.",
      icon: Wallet,
      spanClass: "md:col-span-2 lg:col-span-2",
      theme: "dark",
    },
  ];

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "dark":
        return {
          card: "bg-navy text-white shadow-xl shadow-navy/10 border-white/5",
          iconBg: "bg-white/10",
          iconColor: "text-brand-green",
          title: "text-white",
          desc: "text-gray-300",
          link: "text-brand-light-green group-hover:text-white"
        };
      case "accent":
        return {
          card: "bg-brand-green text-navy shadow-xl shadow-brand-green/20 border-white/20",
          iconBg: "bg-white/20",
          iconColor: "text-navy",
          title: "text-navy",
          desc: "text-navy/80",
          link: "text-navy font-extrabold group-hover:text-white"
        };
      default: // light
        return {
          card: "bg-white text-navy border-gray-200/60 shadow-sm",
          iconBg: "bg-[#f4f6f8]",
          iconColor: "text-brand-green",
          title: "text-navy",
          desc: "text-gray-500",
          link: "text-brand-green font-bold group-hover:text-navy"
        };
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#f4f6f8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-full text-brand-green text-[11px] font-extrabold uppercase tracking-widest">
            <span>Platform Advantages</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-[1.1]">
            Why Partner With ARiders?
          </h2>
          
          <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
            Eliminate operational friction and unpredictable expenses. Tap into our verified fleet to hyper-optimize your logistics immediately.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const theme = getThemeStyles(feature.theme);

            return (
              <div
                key={feature.title}
                className={`${feature.spanClass} ${theme.card} border p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative transition-transform duration-500 hover:-translate-y-1`}
              >
                {feature.theme === 'dark' && (
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />
                )}

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className={`w-6 h-6 ${theme.iconColor}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-extrabold mb-3 leading-snug ${theme.title}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-[15px] leading-relaxed font-medium ${theme.desc}`}>
                    {feature.description}
                  </p>
                </div>

                <div className={`mt-10 flex items-center gap-2 text-sm ${theme.link} transition-colors duration-300 relative z-10`}>
                  <span>Explore feature</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
