"use client";

import React from "react";
import Image from "next/image";
import herorider from "@/public/Group 48.svg";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Sparkles,
  CheckCircle2,
  Truck,
  ArrowRight
} from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-[#f4f6f8] min-h-screen pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center">
      
      {/* Ambient Glowing Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Bento Box Structured Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* 1. MAIN TEXT CARD */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white shadow-[0_20px_80px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-center relative overflow-hidden group">
            
            {/* Subtle inner grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-navy text-[11px] font-black uppercase tracking-[0.2em] w-fit mb-8 group-hover:border-brand-green/30 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                Hyperlocal Redefined
              </div>

              <h1 className="text-[3rem] sm:text-[4rem] lg:text-[4.5rem] font-black text-navy leading-[0.95] tracking-tighter mb-6">
                Logistics that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">
                  moves at your
                </span><br />
                speed.
              </h1>

              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-lg font-medium mb-10">
                Connect your business with verified delivery partners. Fast, structured, and completely technology-powered.
              </p>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-navy text-white font-bold hover:bg-navy/90 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(11,31,77,0.5)]">
                  Get Started Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-3 px-6 py-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">
                    Trusted by <br/><span className="text-navy">1,200+ brands</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. MAIN IMAGE CARD */}
          <motion.div variants={itemVariants} className="lg:col-span-5 bg-gradient-to-br from-[#E6F4DB] to-[#F5FAEF] rounded-[2.5rem] p-8 border border-[#c1e6a3]/50 shadow-[0_20px_80px_-15px_rgba(122,201,67,0.15)] relative flex items-center justify-center min-h-[400px] overflow-hidden group">
            {/* Animated background rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-[40px] border-white/40 blur-3xl group-hover:scale-110 transition-transform duration-1000" />
            
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full h-full p-6 sm:p-12"
            >
              <Image
                src={herorider}
                alt="Logistics Rider"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Floating Glass Badge */}
            <div className="absolute bottom-8 right-8 bg-white/60 backdrop-blur-md border border-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white">
                 <ShieldCheck className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-navy/50">Status</p>
                 <p className="text-navy font-bold text-sm">100% Verified</p>
               </div>
            </div>
          </motion.div>

          {/* 3. STRUCTURED SUB-GRID FOR STATS & CARDS */}
          
          {/* Stats Card */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-4 bg-white/80 backdrop-blur-lg rounded-[2rem] p-8 sm:p-10 border border-white shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform duration-300">
             <div className="w-full grid grid-cols-2 gap-8 text-center divide-x divide-gray-100">
               <div>
                 <h3 className="text-4xl font-black text-navy tracking-tighter">500<span className="text-brand-green">+</span></h3>
                 <p className="text-gray-500 text-[9px] font-black uppercase tracking-[0.2em] mt-2">Deliveries</p>
               </div>
               <div>
                 <h3 className="text-4xl font-black text-navy tracking-tighter">15<span className="text-brand-green">m</span></h3>
                 <p className="text-gray-500 text-[9px] font-black uppercase tracking-[0.2em] mt-2">Avg Pickup</p>
               </div>
             </div>
          </motion.div>

          {/* Live Tracking Card (Dark Theme Block) */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-4 bg-navy rounded-[2rem] p-8 sm:p-10 shadow-[0_15px_40px_-10px_rgba(11,31,77,0.4)] flex items-center justify-center gap-6 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-navy to-navy-light opacity-50" />
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
              <Truck className="text-brand-green w-7 h-7" />
            </div>
            <div className="relative z-10">
              <p className="font-black text-white text-xl tracking-tight leading-tight">Live Tracking</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">Real-time GPS</p>
            </div>
          </motion.div>

          {/* Delivery Confirmed Card (Green Theme Block) */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-4 bg-brand-green rounded-[2rem] p-8 sm:p-10 shadow-[0_15px_40px_-10px_rgba(122,201,67,0.4)] flex items-center justify-center gap-6 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5" />
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:scale-110 transition-transform duration-500 relative z-10">
              <CheckCircle2 className="text-white w-7 h-7" />
            </div>
            <div className="relative z-10">
              <p className="font-black text-navy text-xl tracking-tight leading-tight">Confirmed</p>
              <p className="text-[10px] font-bold text-navy/70 uppercase tracking-widest mt-1.5">Proof of delivery</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
