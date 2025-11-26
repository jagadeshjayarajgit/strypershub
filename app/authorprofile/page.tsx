"use client";

import React, { useState } from "react";
import Image from "next/image";
import DesignBlocks from "@/components/ui/DesignBlocks";
import Pagination from "@/components/ui/Pagination";

export default function AuthorProfilePage() {
    const [isCopied, setIsCopied] = useState(false);

    const personalWeb = "jack.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(personalWeb);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <section className="relative w-full text-white">
            {/* Main Card Container */}
            <div className="relative w-full rounded-[30px] overflow-hidden bg-[#343444] shadow-2xl mb-4">

                {/* Content Wrapper */}
                <div className="relative z-10 px-6 py-8 md:px-10 md:py-8">

                    {/* Top Section: Profile Info */}
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

                        {/* Avatar */}
                        <div className="flex-shrink-0 relative group">
                            <div className="w-[120px] h-[120px] rounded-[24px] bg-[#8CD1AD] flex items-center justify-center overflow-hidden border-4 border-[#343444] shadow-2xl transition-transform duration-500 group-hover:rotate-3">
                                <Image
                                    src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1000&auto=format&fit=crop"
                                    alt="Trista Francis"
                                    width={120}
                                    height={120}
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Info Block */}
                        <div className="flex-1 w-full text-center md:text-left">
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">

                                {/* Text Info */}
                                <div className="max-w-xl">
                                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                        <span className="text-gray-400 text-xs font-medium tracking-wider uppercase">Author Profile</span>
                                    </div>
                                    <h1 className="text-3xl font-bold mb-2 text-white">Jagadesh Jayaraj</h1>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-md mx-auto md:mx-0">
                                        I do Designs and Stuffs!!!!!! Creating digital masterpieces in the metaverse.
                                    </p>

                                    {/* Wallet Address & Verified Badge */}
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                        <button
                                            onClick={handleCopy}
                                            className="flex items-center gap-2 bg-[#14141F] border border-white/10 text-gray-300 px-4 py-1.5 rounded-full font-medium text-xs hover:border-[#00FF9D]/50 hover:text-white transition-all group cursor-pointer"
                                        >
                                            <span>{isCopied ? "Copied!" : personalWeb}</span>
                                            <svg className={`text-[#00FF9D] w-3 h-3 transition-transform ${isCopied ? "scale-125" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                        </button>

                                        {/* Strype Verified Badge */}
                                        <div className="flex items-center gap-1.5 bg-[#00FF9D]/10 border border-[#00FF9D]/20 px-3 py-1.5 rounded-full">
                                            <div className="bg-[#00FF9D] rounded-full p-0.5">
                                                <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-[#00FF9D] text-xs font-bold tracking-wide">Strype Verified</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Creative Social Actions */}
                                <div className="flex items-center gap-2 mt-2 md:mt-0">
                                    {[
                                        { icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />, color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]" },
                                        { icon: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>, color: "hover:bg-[#0088cc] hover:border-[#0088cc]" },
                                        { icon: <><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></>, color: "hover:bg-[#FF0000] hover:border-[#FF0000]" },
                                        { icon: <><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /><path d="M7.5 7.2c.3-.8 1-1.5 1.5-1.5C12 5 12 5 12 5s0 0 3 1c.5 0 1.2.7 1.5 1.5.7 2 1.3 5 1.3 5s0 2.2-1.3 4c-.7 1-1.8 1.5-1.8 1.5l-1-1.2c.8-.2 1.4-.7 1.4-.7s-1 1-6 1-6-1-6-1c0 0 .6.5 1.4.7l-1 1.2s-1.1-.5-1.8-1.5C1.2 14.2 1.2 12 1.2 12s.6-3 1.3-5Z" /></>, color: "hover:bg-[#5865F2] hover:border-[#5865F2]" }
                                    ].map((social, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            className={`w-9 h-9 flex items-center justify-center rounded-full bg-[#14141F] border border-white/10 text-gray-400 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                                        >
                                            <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                {social.icon}
                                            </svg>
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Section Header */}
            <div className="mb-8">
                <p className="text-gray-400 text-sm md:text-base">
                    Explore creative works and design masterpieces of this author
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-3"></div>
            </div>
            <DesignBlocks />
            <Pagination />
        </section>

    );
}