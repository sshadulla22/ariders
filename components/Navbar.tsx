"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Why ARiders", href: "#why-us" },
    { name: "Pricing", href: "#pricing" },
    { name: "Revenue Split", href: "#revenue" },
  ];

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-[95%] lg:max-w-7xl rounded-[2rem] border ${
          isScrolled
            ? "top-4 bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border-white/50 py-3 px-2 lg:px-6"
            : "top-6 bg-white/40 backdrop-blur-md shadow-[0_5px_20px_-10px_rgba(0,0,0,0.05)] border-white/20 py-4 px-2 lg:px-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center group relative h-12 w-40 sm:h-14 sm:w-56">
              <Image 
                src={logo}
                alt="ARiders Logo" 
                height={90}
                className="object-contain object-left group-hover:scale-105 transition-transform duration-300" 
                priority
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-gray-600 hover:text-navy transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="#pricing"
                className="text-sm font-semibold text-gray-500 hover:text-navy transition-colors duration-200"
              >
                Become a Rider
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 bg-navy hover:bg-navy/90 text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-[0_4px_15px_-4px_rgba(11,31,77,0.3)] hover:shadow-[0_8px_20px_-4px_rgba(11,31,77,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-navy hover:bg-gray-50 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl p-6 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <a href="#" className="relative h-10 w-36" onClick={() => setIsOpen(false)}>
                  <Image 
                     src="/logo.png" 
                     alt="ARiders Logo" 
                     fill 
                     className="object-contain object-left" 
                  />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-navy hover:bg-gray-50"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-5 mb-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-bold text-gray-700 hover:text-navy hover:pl-2 transition-all duration-200 border-l-2 border-transparent hover:border-brand-green"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 border border-gray-200 hover:border-navy text-navy font-bold py-3 rounded-full text-center transition-all duration-200"
                >
                  Become a Rider
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-navy hover:bg-navy/95 text-white font-bold py-3 rounded-full text-center shadow-lg shadow-navy/15 transition-all duration-200"
                >
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
