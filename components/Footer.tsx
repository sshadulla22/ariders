"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-navy text-white relative pt-16 pb-8 overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Logo & Brand Column */}
          <div className="space-y-6">
            <a href="#" className="relative h-16 w-48 bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl border border-white/10">
              <Image 
                src="/logo.png" 
                alt="ARiders Logo" 
                fill 
                className="object-contain p-2" 
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              ARiders is a technology-driven logistics marketplace connecting businesses and customers with verified independent delivery partners across Mumbai and Navi Mumbai.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-green/20 hover:text-brand-green flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-green/20 hover:text-brand-green flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-green/20 hover:text-brand-green flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#revenue" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
                  Rider Earnings
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Mumbai</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Navi Mumbai</span>
              </li>
              <li className="text-gray-500 text-xs italic mt-4 pl-6">
                * Expanding to other cities soon
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@ariders.in" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span className="break-all">support@ariders.in</span>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <span>
                  101, Technology Hub, Bandra Kurla Complex, Mumbai, Maharashtra 400051
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-gray-500">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© 2025 ARiders. All Rights Reserved.</p>
            <p className="text-brand-green font-medium text-xs mt-1 uppercase tracking-widest">
              Delivering Trust. Connecting Futures.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-white/5 hover:bg-brand-green text-gray-300 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-brand-green transition-all duration-300 text-xs font-bold"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mega Footer Typography */}
      <div className="w-full overflow-hidden flex justify-center mt-12 opacity-5 pointer-events-none select-none">
        <h1 className="text-[15vw] font-black leading-none tracking-tighter text-white">
          ARIDERS
        </h1>
      </div>
    </footer>
  );
}
