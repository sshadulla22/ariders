"use client";

import React, { useState, useEffect } from "react";
import { CircleDollarSign, Scale, CloudRain, ShieldCheck, Zap, Info, MapPin } from "lucide-react";


export default function Pricing() {
  // Calculator States
  const [distance, setDistance] = useState<number>(5);
  const [weight, setWeight] = useState<number>(1);
  const [isExpress, setIsExpress] = useState<boolean>(false);
  const [isPeak, setIsPeak] = useState<boolean>(false);
  const [isRain, setIsRain] = useState<boolean>(false);
  const [calculatedPrice, setCalculatedPrice] = useState<string>("79");
  const [priceBreakdown, setPriceBreakdown] = useState<{
    base: number;
    weightCharge: number;
    express: number;
    surge: number;
  }>({ base: 79, weightCharge: 0, express: 0, surge: 0 });

  // Calculation Logic
  useEffect(() => {
    let base = 0;
    let weightCharge = 0;
    let express = 0;
    let surgePercent = 0;

    if (distance <= 3) base = 49;
    else if (distance <= 7) base = 79;
    else if (distance <= 12) base = 119;
    else if (distance <= 20) base = 169;
    else base = 169 + (distance - 20) * 10;

    if (weight > 2) weightCharge = Math.ceil(weight - 2) * 5;
    if (isExpress) express = 30;

    if (isPeak) surgePercent += 0.10;
    if (isRain) surgePercent += 0.15;

    const subtotal = base + weightCharge + express;
    const surge = Math.round(subtotal * surgePercent);
    const total = subtotal + surge;

    if (distance > 30) setCalculatedPrice("Custom");
    else setCalculatedPrice(total.toString());

    setPriceBreakdown({ base, weightCharge, express, surge });
  }, [distance, weight, isExpress, isPeak, isRain]);

  const pricingTable = [
    { range: "0 - 3 km", price: "₹49", badge: "Base Rate" },
    { range: "3 - 7 km", price: "₹79", badge: "" },
    { range: "7 - 12 km", price: "₹119", badge: "" },
    { range: "12 - 20 km", price: "₹169", badge: "" },
    { range: "20+ km", price: "Custom", badge: "Enterprise" },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div
            className="inline-flex items-center gap-2 bg-[#f4f6f8] border border-gray-200 px-4 py-1.5 rounded-full text-navy text-[11px] font-extrabold uppercase tracking-widest"
          >
            <CircleDollarSign className="w-3.5 h-3.5 text-brand-green" />
            <span>Fair & Transparent Pricing</span>
          </div>
          
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-[1.1]"
          >
            Pay strict distance rates. <br/>
            <span className="text-brand-green">Zero hidden fees.</span>
          </h2>
        </div>

        {/* Bento Grid Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Panel: Static Pricing Structure */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Standard Rates Card */}
            <div
              className="bg-[#f4f6f8] rounded-[2rem] p-8 sm:p-10 border border-gray-100"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-extrabold text-2xl text-navy">Standard Rates</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">Calculated strictly on travel distance.</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-green" />
                </div>
              </div>

              <div className="space-y-3">
                {pricingTable.map((row, i) => (
                  <div key={i} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 hover:border-brand-green/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-700">{row.range}</span>
                      {row.badge && (
                        <span className="bg-navy/5 text-navy text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                          {row.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-extrabold text-lg text-navy">{row.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weight Rules & Surges Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Weight Card */}
              <div 
                className="bg-brand-green rounded-[2rem] p-8 border border-brand-green/20 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none group-hover:scale-110 transition-transform">
                  <Scale className="w-24 h-24 text-navy" />
                </div>
                <h4 className="font-extrabold text-navy text-xl mb-2 relative z-10">Weight Rules</h4>
                <p className="text-navy/80 text-sm font-medium mb-6 relative z-10 leading-relaxed">
                  First 2kg is completely free. Ideal for food, docs, and small parcels.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 relative z-10">
                  <span className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1">Excess Cargo</span>
                  <span className="font-black text-2xl text-navy">₹5 <span className="text-sm font-bold opacity-80">/ kg</span></span>
                </div>
              </div>

              {/* Dynamic Surges Card */}
              <div 
                className="bg-navy rounded-[2rem] p-8 border border-navy shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <h4 className="font-extrabold text-white text-xl mb-2 relative z-10">Dynamic Surges</h4>
                <p className="text-gray-400 text-sm font-medium mb-6 relative z-10 leading-relaxed">
                  Small multipliers applied only during extreme conditions to ensure rider availability.
                </p>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-medium flex items-center gap-2"><CloudRain className="w-4 h-4 text-brand-green"/> Monsoons</span>
                    <span className="text-white font-bold">+15%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-medium flex items-center gap-2"><Zap className="w-4 h-4 text-brand-green"/> Peak Hours</span>
                    <span className="text-white font-bold">+10%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Panel: Interactive Cost Estimator */}
          <div 
            className="lg:col-span-5 bg-white border border-gray-200/80 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
                  <CircleDollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-2xl text-navy">Live Estimator</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">Calculate your exact trip cost</p>
                </div>
              </div>

              {/* Sliders Container */}
              <div className="space-y-8">
                
                {/* Distance Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-[13px] font-bold uppercase tracking-wider text-gray-500">Distance</label>
                    <span className="text-xl font-black text-navy">{distance} <span className="text-sm font-bold text-gray-400">km</span></span>
                  </div>
                  <div className="relative pt-1">
                    <input
                      type="range" min="1" max="35"
                      value={distance}
                      onChange={(e) => setDistance(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-green"
                    />
                  </div>
                </div>

                {/* Weight Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-[13px] font-bold uppercase tracking-wider text-gray-500">Weight</label>
                    <span className="text-xl font-black text-navy">{weight} <span className="text-sm font-bold text-gray-400">kg</span></span>
                  </div>
                  <div className="relative pt-1">
                    <input
                      type="range" min="1" max="15"
                      value={weight}
                      onChange={(e) => setWeight(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-green"
                    />
                  </div>
                </div>

                {/* Add-ons Toggles */}
                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${isExpress ? 'bg-brand-green border-brand-green' : 'bg-gray-50 border-gray-300'}`}>
                      {isExpress && <ShieldCheck className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <input type="checkbox" className="hidden" checked={isExpress} onChange={(e) => setIsExpress(e.target.checked)} />
                    <span className="text-sm font-bold text-navy group-hover:text-brand-green transition-colors">Express Dispatch (+₹30)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${isRain ? 'bg-brand-green border-brand-green' : 'bg-gray-50 border-gray-300'}`}>
                      {isRain && <ShieldCheck className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <input type="checkbox" className="hidden" checked={isRain} onChange={(e) => setIsRain(e.target.checked)} />
                    <span className="text-sm font-bold text-navy group-hover:text-brand-green transition-colors">Rain Active (+15%)</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${isPeak ? 'bg-brand-green border-brand-green' : 'bg-gray-50 border-gray-300'}`}>
                      {isPeak && <ShieldCheck className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <input type="checkbox" className="hidden" checked={isPeak} onChange={(e) => setIsPeak(e.target.checked)} />
                    <span className="text-sm font-bold text-navy group-hover:text-brand-green transition-colors">Peak Hour Active (+10%)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Receipt Output */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Estimated Total</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-black text-brand-green tracking-tight">
                  {calculatedPrice === "Custom" ? "" : "₹"}{calculatedPrice}
                </span>
                {calculatedPrice === "Custom" && <span className="text-2xl font-bold text-navy mb-1">Custom Quote</span>}
              </div>
              
              {calculatedPrice !== "Custom" && (
                <div className="space-y-1.5 text-xs font-medium text-gray-500 bg-gray-50 p-4 rounded-xl">
                  <div className="flex justify-between"><span>Base Fare (Distance)</span><span className="text-navy font-bold">₹{priceBreakdown.base}</span></div>
                  <div className="flex justify-between"><span>Excess Weight</span><span className="text-navy font-bold">₹{priceBreakdown.weightCharge}</span></div>
                  <div className="flex justify-between"><span>Express Fee</span><span className="text-navy font-bold">₹{priceBreakdown.express}</span></div>
                  <div className="flex justify-between"><span>Active Surges</span><span className="text-navy font-bold">₹{priceBreakdown.surge}</span></div>
                </div>
              )}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
