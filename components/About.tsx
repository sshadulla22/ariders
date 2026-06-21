"use client";

import React from "react";
import { Compass, Users2, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Delivery Partners", value: "5,000+" },
    { label: "Orders Delivered", value: "250K+" },
    { label: "Average Rating", value: "4.9/5" },
    { label: "Active Clients", value: "1,200+" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* STICKY LEFT COLUMN */}
          <div className="lg:w-5/12">
            <div className="sticky top-32 space-y-8">
              
              <div className="inline-flex items-center gap-2 bg-[#f4f6f8] border border-gray-200 px-4 py-1.5 rounded-full text-navy text-[11px] font-extrabold uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5 text-brand-green" />
                <span>Our Story</span>
              </div>
              
              <div className="relative">
                <h2 className="absolute -top-10 -left-6 text-[8rem] font-black text-[#f4f6f8] leading-none select-none pointer-events-none z-0 tracking-tighter hidden md:block">
                  ABOUT
                </h2>
                
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.1] relative z-10">
                  Revolutionizing <br/>
                  <span className="text-brand-green">Last-Mile.</span>
                </h3>
              </div>

              <p className="text-lg text-gray-500 font-medium leading-relaxed relative z-10">
                ARiders is a technology-driven logistics marketplace. We connect visionary businesses with verified independent delivery partners to make hyperlocal logistics invisible, fast, and remarkably affordable.
              </p>
              
            </div>
          </div>

          {/* SCROLLING RIGHT COLUMN */}
          <div className="lg:w-7/12 space-y-6">
            
            {/* Visual Box Frame (Sea Link) */}
            <div className="relative w-full bg-navy rounded-[2rem] overflow-hidden aspect-[16/9] shadow-sm border border-navy group">
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10" />

              <svg 
                viewBox="0 0 400 300" 
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="300" fill="#0B1F4D" />
                <circle cx="50" cy="40" r="1" fill="#FFFFFF" opacity="0.8" />
                <circle cx="120" cy="70" r="1" fill="#FFFFFF" opacity="0.5" />
                <circle cx="280" cy="50" r="1.5" fill="#FFFFFF" opacity="0.6" />
                <circle cx="340" cy="80" r="1" fill="#FFFFFF" opacity="0.7" />
                <circle cx="200" cy="180" r="60" fill="url(#sunGlow)" />
                <path d="M0,230 L40,230 L40,190 L60,190 L60,230 L80,230 L80,200 L95,200 L95,230 L220,230 L220,180 L240,180 L240,230 L300,230 L300,195 L325,195 L325,230 L400,230" fill="#061230" />
                <path d="M30,230 L50,230 L50,170 L70,170 L70,230 L250,230 L250,160 L275,160 L275,230 M310,230 L330,230 L330,165 L350,165 L350,230" fill="#040b1e" opacity="0.8" />
                <path d="M 120,230 L 150,110 L 155,110 L 185,230" fill="none" stroke="#7AC943" strokeWidth="2" opacity="0.6" />
                <path d="M 100,230 L 150,110 M 205,230 L 155,110" fill="none" stroke="#A4D65E" strokeWidth="1" opacity="0.4" />
                <path d="M 140,230 L 150,100 L 155,100 L 165,230" fill="#0B1F4D" stroke="#7AC943" strokeWidth="2" />
                <rect x="146" y="140" width="13" height="6" fill="#7AC943" />
                <rect x="148" y="180" width="9" height="5" fill="#7AC943" />
                <path d="M 0,230 C 100,225 300,225 400,230" fill="none" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
                <path d="M 0,232 C 100,227 300,227 400,232" fill="none" stroke="#7AC943" strokeWidth="2" strokeLinecap="round" />
                <rect x="30" y="233" width="10" height="20" fill="#040b1e" />
                <rect x="90" y="232" width="12" height="25" fill="#040b1e" />
                <rect x="220" y="232" width="12" height="25" fill="#040b1e" />
                <rect x="0" y="245" width="400" height="55" fill="url(#seaGradient)" />
                <defs>
                  <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#7AC943" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0B1F4D" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="seaGradient" x1="200" y1="245" x2="200" y2="300">
                    <stop offset="0%" stopColor="#061230" />
                    <stop offset="100%" stopColor="#020714" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute bottom-8 left-8 right-8 z-20">
                <p className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">Connecting Mumbai</p>
                <h4 className="text-white text-2xl font-extrabold leading-tight">Gateway to Hyperlocal Success</h4>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#f4f6f8] p-6 rounded-[2rem] border border-gray-100 flex flex-col justify-center items-center text-center">
                  <p className="text-2xl lg:text-3xl font-extrabold text-navy tracking-tight">{stat.value}</p>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Mission & Network Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-brand-green p-8 rounded-[2rem] border border-brand-green/20 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-navy mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-navy text-xl mb-3">Our Mission</h3>
                <p className="text-navy/80 text-[15px] leading-relaxed font-medium">
                  Simplify last-mile delivery by providing fast, reliable, and radically affordable logistics solutions without the friction of hiring dedicated delivery staff.
                </p>
              </div>

              <div className="bg-[#f4f6f8] p-8 rounded-[2rem] border border-gray-200 relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-green mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-navy text-xl mb-3">Seamless Network</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                  Businesses can instantly tap into our sprawling network of delivery partners for same-day and scheduled deliveries across the entire Mumbai region.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
