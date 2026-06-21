"use client";

import React from "react";
import { Eye, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="py-24 bg-[#f4f6f8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Grid - Asymmetrical Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Title Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-4 bg-white p-10 rounded-[2rem] border border-gray-200/60 shadow-sm flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/10 px-3 py-1.5 rounded-full text-brand-green text-[10px] font-extrabold uppercase tracking-widest w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Core Philosophy
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-navy leading-[1.1] tracking-tight">
              Purpose <br/>
              <span className="text-gray-400">&</span> Driven.
            </h2>
          </motion.div>

          {/* Card 1: Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 bg-navy p-10 rounded-[2rem] shadow-sm relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-7 h-7" />
              </div>
              
              <div>
                <span className="text-[10px] font-extrabold text-brand-green uppercase tracking-widest block mb-2">Our Goal</span>
                <h3 className="text-3xl font-extrabold text-white mb-4">Vision</h3>
                <p className="text-gray-300 text-[15px] leading-relaxed font-medium">
                  To become India's most trusted hyperlocal logistics platform by empowering businesses, delivery partners, and customers through innovative technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 lg:col-span-4 bg-brand-green p-10 rounded-[2rem] shadow-sm relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-white/5 pointer-events-none rounded-[2rem]" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-navy group-hover:scale-110 transition-transform duration-500">
                <Target className="w-7 h-7" />
              </div>
              
              <div>
                <span className="text-[10px] font-extrabold text-navy/70 uppercase tracking-widest block mb-2">Our Drive</span>
                <h3 className="text-3xl font-extrabold text-navy mb-4">Mission</h3>
                <p className="text-navy/80 text-[15px] leading-relaxed font-medium">
                  To deliver unparalleled speed and reliability while creating earning opportunities for delivery partners and eliminating operational challenges for businesses.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
