"use client";

import React, { useState } from "react";
import { CircleDollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function RevenueSharing() {
  const [payment, setPayment] = useState<number>(150);
  const [activeWedge, setActiveWedge] = useState<"rider" | "ariders" | null>(null);

  const riderShare = Math.round(payment * 0.8);
  const commission = Math.round(payment * 0.2);

  const examples = [
    { customer: 79, rider: 63, ariders: 16 },
    { customer: 119, rider: 95, ariders: 24 },
    { customer: 169, rider: 135, ariders: 34 },
    { customer: 250, rider: 200, ariders: 50 },
  ];

  const radius = 50;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;
  const riderStrokeDash = circumference * 0.8;
  const riderOffset = circumference * 0.25;
  const commissionStrokeDash = circumference * 0.2;
  const commissionOffset = riderOffset - riderStrokeDash;

  return (
    <section id="revenue" className="py-24 bg-[#f4f6f8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-full text-brand-green text-[11px] font-extrabold uppercase tracking-widest"
          >
            <CircleDollarSign className="w-3.5 h-3.5 text-brand-green" />
            <span>Rider Operations</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-[1.1]"
          >
            Fair Revenue Sharing.<br/>
            <span className="text-brand-green">Transparent 80/20 Split.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Panel: Earnings Simulator (Col span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-gray-200/80 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center h-full">
              
              {/* Donut Chart */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 140 140" className="w-full h-full transform -rotate-90">
                    <circle cx="70" cy="70" r={radius} fill="transparent" stroke="#f4f6f8" strokeWidth={strokeWidth} />
                    <motion.circle
                      cx="70" cy="70" r={radius} fill="transparent" stroke="#7AC943" strokeWidth={strokeWidth}
                      strokeDasharray={`${riderStrokeDash} ${circumference - riderStrokeDash}`} strokeDashoffset={riderOffset} strokeLinecap="round"
                      onMouseEnter={() => setActiveWedge("rider")} onMouseLeave={() => setActiveWedge(null)}
                      className="cursor-pointer transition-all duration-300 hover:stroke-[16px]"
                      initial={{ strokeDasharray: `0 ${circumference}` }} whileInView={{ strokeDasharray: `${riderStrokeDash} ${circumference - riderStrokeDash}` }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.circle
                      cx="70" cy="70" r={radius} fill="transparent" stroke="#0B1F4D" strokeWidth={strokeWidth}
                      strokeDasharray={`${commissionStrokeDash} ${circumference - commissionStrokeDash}`} strokeDashoffset={commissionOffset} strokeLinecap="round"
                      onMouseEnter={() => setActiveWedge("ariders")} onMouseLeave={() => setActiveWedge(null)}
                      className="cursor-pointer transition-all duration-300 hover:stroke-[16px]"
                      initial={{ strokeDasharray: `0 ${circumference}` }} whileInView={{ strokeDasharray: `${commissionStrokeDash} ${circumference - commissionStrokeDash}` }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="text-3xl font-extrabold text-navy leading-none">80/20</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8 text-xs font-bold">
                  <div className={`flex items-center gap-1.5 cursor-pointer p-1.5 rounded-lg transition-colors ${activeWedge === "rider" ? "bg-[#f4f6f8]" : ""}`} onMouseEnter={() => setActiveWedge("rider")} onMouseLeave={() => setActiveWedge(null)}>
                    <span className="w-3 h-3 rounded-full bg-brand-green" />
                    <span className="text-gray-700">Riders (80%)</span>
                  </div>
                  <div className={`flex items-center gap-1.5 cursor-pointer p-1.5 rounded-lg transition-colors ${activeWedge === "ariders" ? "bg-[#f4f6f8]" : ""}`} onMouseEnter={() => setActiveWedge("ariders")} onMouseLeave={() => setActiveWedge(null)}>
                    <span className="w-3 h-3 rounded-full bg-navy" />
                    <span className="text-gray-700">ARiders (20%)</span>
                  </div>
                </div>
              </div>

              {/* Slider & Results */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="font-extrabold text-2xl text-navy">Simulator</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">Adjust trip payment below</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[13px] font-bold uppercase tracking-wider text-gray-500">Trip Cost</span>
                    <span className="text-2xl font-black text-navy">₹{payment}</span>
                  </div>
                  <input
                    type="range" min="50" max="500" step="10"
                    value={payment} onChange={(e) => setPayment(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                </div>

                <div className="space-y-3">
                  <div className="bg-[#f4f6f8] p-4 rounded-xl flex justify-between items-center border border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-500 font-extrabold uppercase mb-0.5">Rider Gets</p>
                      <p className="text-xs text-brand-green font-bold">80% Share</p>
                    </div>
                    <p className="text-2xl font-black text-navy">₹{riderShare}</p>
                  </div>
                  
                  <div className="bg-[#f4f6f8] p-4 rounded-xl flex justify-between items-center border border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-500 font-extrabold uppercase mb-0.5">ARiders Fee</p>
                      <p className="text-xs text-navy/60 font-bold">20% Share</p>
                    </div>
                    <p className="text-xl font-bold text-navy/70">₹{commission}</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Panel: Precalculated Examples (Col span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-navy rounded-[2rem] p-8 sm:p-10 border border-navy shadow-lg flex-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">Payout Examples</h3>
                  <p className="text-gray-400 text-sm font-medium mt-1">Based on standard distances</p>
                </div>

                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/5 text-white/60 text-[10px] font-bold uppercase tracking-wider border-b border-white/10">
                        <th className="px-5 py-3">Customer</th>
                        <th className="px-5 py-3 text-brand-green">Rider (80%)</th>
                        <th className="px-5 py-3 text-right">Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm font-semibold">
                      {examples.map((ex) => (
                        <tr key={ex.customer} className="hover:bg-white/5 transition-colors">
                          <td className="px-5 py-3 text-white">₹{ex.customer}</td>
                          <td className="px-5 py-3 text-brand-green font-bold">₹{ex.rider}</td>
                          <td className="px-5 py-3 text-right text-gray-400 font-medium">₹{ex.ariders}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-brand-green rounded-[2rem] p-6 sm:p-8 flex items-center gap-6 group hover:-translate-y-1 transition-transform cursor-default">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-navy flex-shrink-0 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-navy font-extrabold text-lg mb-1">Attracting Top Riders</h4>
                <p className="text-navy/80 text-sm font-medium leading-relaxed">
                  Our high 80% payout guarantees rapid pickups and reliable deliveries for your business.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
