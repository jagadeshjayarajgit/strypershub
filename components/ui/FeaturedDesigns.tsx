"use client";

import Image from "next/image";
import React from "react";
import Pagination from "./Pagination";
import Link from "next/link";

// Mock Data for design marketplace
const designData = [
    {
        id: 1,
        title: '"Triumphant Awakening..."',
        creatorName: "Trista Francis",
        creatorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        price: "₹4,199",
        image: "https://images.unsplash.com/photo-1642425149556-b6f90e946859?q=80&w=1000&auto=format&fit=crop",
        likes: 220,
        downloads: 1200,
        bgColor: "bg-[#EAE0D5]",
    },
    {
        id: 2,
        title: '"Living Vase 01 By Lanza..."',
        creatorName: "Freddie Carpenter",
        creatorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
        price: "₹3,349",
        image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop",
        likes: 90,
        downloads: 850,
        bgColor: "bg-[#B8E1DD]",
    },
    {
        id: 3,
        title: '"Flame Dress\' By Balmain..."',
        creatorName: "Tyler Covington",
        creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        price: "₹5,029",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        likes: 145,
        downloads: 980,
        bgColor: "bg-[#E2A663]",
    },
    {
        id: 4,
        title: '"Hamlet Contemplates ...',
        creatorName: "SalvadorDali",
        creatorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
        price: "₹3,769",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        likes: 100,
        downloads: 750,
        bgColor: "bg-[#D6D6D6]",
    },
];

export default function FeaturedDesigns() {
    return (
        <section className="w-full bg-[#14141F] py-10">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-10 border-b border-gray-700/50 pb-6 relative">
                    <div className="absolute top-full left-0 w-full h-[1px] bg-transparent opacity-50"></div>

                    <h2 className="text-3xl font-bold text-white mb-4 sm:mb-0">Featured Designs</h2>
                    <a href="#" className="text-sm font-bold tracking-widest text-gray-400 hover:text-white hover:border-b-[#00FF9D] transition-all uppercase border-b-2 border-transparent pb-1">
                        Explore More
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {designData.map((item) => (
                        <div key={item.id} className="bg-[#343444] p-5 rounded-[20px] hover:-translate-y-2 transition-transform duration-300 group shadow-xl border border-transparent hover:border-[#00FF9D]/30">

                            {/* Image Area */}
                            <div className={`relative w-full aspect-square rounded-[20px] overflow-hidden ${item.bgColor} mb-5`}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Like Count (Top Right) */}
                                <div className="absolute top-3 right-3 bg-[#14141F] text-white text-xs font-bold py-1.5 px-3 rounded-lg flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                    {item.likes}
                                </div>

                                {/* Buy Now Button (Center - visible on hover) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max">
                                    <button className="bg-white text-[#00D97E] font-bold py-2.5 px-6 rounded-full flex items-center gap-2 hover:bg-[#00FF9D] hover:text-white transition-colors shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                        Buy Now
                                    </button>
                                </div>

                                {/* Downloads (Bottom Center) */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#14141F] rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg min-w-max">
                                    <svg className="text-[#00FF9D]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                    <span className="text-white text-xs font-bold tracking-widest">{item.downloads}</span>
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <h5 className="text-white font-bold text-lg truncate pr-2 hover:text-[#00FF9D] cursor-pointer">{item.title}</h5>
                                    <span className="bg-[#00D97E] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Premium</span>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#00FF9D]">
                                            <Image src={item.creatorAvatar} alt={item.creatorName} fill className="object-cover" />
                                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-white rounded-full"></div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-gray-400 text-[11px]">Creator</span>
                                            <Link href={`/authorprofile`} className="text-white text-xs font-semibold hover:text-[#00FF9D] cursor-pointer">{item.creatorName}</Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-gray-400 text-[11px]">Price</span>
                                        <span className="text-white text-sm font-bold">{item.price}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
            <Pagination />
        </section>
    );
}
