"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Activity", href: "/activity" },
    { name: "Community", href: "/community" },
    { name: "Pages", href: "/pages" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || mobileMenuOpen
            ? "bg-[#14141F]/90 backdrop-blur-md border-white/10 py-4 shadow-lg"
            : "bg-transparent border-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* --- Logo --- */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-green-500 p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                {/* Fire icon */}
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-wide text-white">StypersHub</span>
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-green-400 transition-colors py-2">
                  {item.name}
                  <svg className="group-hover:rotate-180 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>

                {/* Dropdown Menu (Mockup) */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#14141F] border border-gray-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  <div className="py-2">
                    <a href={item.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-green-500/20 hover:text-white">{item.name}</a>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* --- Actions & Mobile Toggle --- */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search Icon */}
            <button className="text-white hover:text-green-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </button>


            <Link href="/profilepage" className="hidden sm:flex items-center gap-3 p-2 bg-[#1a1a2e] rounded-full hover:bg-[#252538] transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <div className="pr-3">
                <p className="text-white font-semibold text-sm">User Profile</p>
              </div>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu Dropdown --- */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-[#14141F] border-t border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-medium text-gray-300 hover:text-white border-b border-gray-800 pb-2">
                {item.name}
              </a>
            ))}
            <div className="flex sm:hidden items-center gap-3 mt-4 p-3 bg-[#1a1a2e] rounded-full">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">User Profile</p>
                <p className="text-gray-400 text-xs">View your account</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap if using fixed header */}
      <div className="h-[80px]"></div>
    </>
  );
}