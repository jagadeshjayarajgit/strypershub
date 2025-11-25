"use client";

import React, { useState } from "react";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";

// Mock Data for Designs
const purchasedDesigns = [
    {
        id: 1,
        title: '"Cyber Punk City"',
        creatorName: "NeonMaster",
        creatorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        price: "4,500 INR",
        image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop",
        likes: 340,
        downloads: 150,
        bgColor: "bg-purple-900",
    },
    {
        id: 2,
        title: '"Abstract Fluid"',
        creatorName: "ArtVibe",
        creatorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
        price: "2,100 INR",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        likes: 120,
        downloads: 80,
        bgColor: "bg-blue-900",
    },
];

const likedDesigns = [
    {
        id: 3,
        title: '"Neon Dreams"',
        creatorName: "FutureArt",
        creatorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
        price: "3,800 INR",
        image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop",
        likes: 560,
        downloads: 300,
        bgColor: "bg-pink-900",
    },
    {
        id: 4,
        title: '"Digital Genesis"',
        creatorName: "CryptoKing",
        creatorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80",
        price: "5,000 INR",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
        likes: 890,
        downloads: 450,
        bgColor: "bg-green-900",
    },
    {
        id: 5,
        title: '"Space Walker"',
        creatorName: "StarGazer",
        creatorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        price: "1,200 INR",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        likes: 210,
        downloads: 90,
        bgColor: "bg-indigo-900",
    },
];
const yourDesigns = [
    {
        id: 3,
        title: '"Neon Dreams"',
        creatorName: "FutureArt",
        creatorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
        price: "3,800 INR",
        image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop",
        likes: 560,
        downloads: 300,
        bgColor: "bg-pink-900",
    },
    {
        id: 4,
        title: '"Digital Genesis"',
        creatorName: "CryptoKing",
        creatorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80",
        price: "5,000 INR",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
        likes: 890,
        downloads: 450,
        bgColor: "bg-green-900",
    },
    {
        id: 5,
        title: '"Space Walker"',
        creatorName: "StarGazer",
        creatorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        price: "1,200 INR",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        likes: 210,
        downloads: 90,
        bgColor: "bg-indigo-900",
    },
];
const ProfileDesignGrid = ({ items }: { items: typeof purchasedDesigns }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
            <div key={item.id} className="bg-[#343444] p-4 rounded-[20px] hover:-translate-y-2 transition-transform duration-300 group shadow-xl border border-transparent hover:border-[#00FF9D]/30">
                {/* Image Area */}
                <div className={`relative w-full aspect-square rounded-[20px] overflow-hidden ${item.bgColor} mb-4`}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Like Count */}
                    <div className="absolute top-3 right-3 bg-[#14141F]/80 backdrop-blur-sm text-white text-xs font-bold py-1.5 px-3 rounded-lg flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        {item.likes}
                    </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                    <h5 className="text-white font-bold text-lg truncate hover:text-[#00FF9D] cursor-pointer">{item.title}</h5>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#00FF9D]">
                                <Image src={item.creatorAvatar} alt={item.creatorName} fill className="object-cover" />
                            </div>
                            <span className="text-gray-400 text-xs">{item.creatorName}</span>
                        </div>
                        <span className="text-[#00FF9D] text-sm font-bold">{item.price}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("bio"); // 'bio', 'purchased', 'liked'
    const [isCopied, setIsCopied] = useState(false);
    const personalWeb = "0x71C...9A23";

    const handleCopy = () => {
        navigator.clipboard.writeText(personalWeb);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <section className="min-h-screen bg-[#14141F] text-white pb-20">
            <div className="container mx-auto px-6 pt-10 relative z-10">
                {/* Profile Header Card */}
                <div className="bg-[#343444] rounded-[30px] p-6 mb-10 flex flex-col xl:flex-row items-center gap-8 shadow-2xl border border-white/5">

                    {/* Avatar */}
                    <div className="relative w-[120px] h-[120px] shrink-0 rounded-[24px] bg-[#14141F] shadow-lg overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1000&auto=format&fit=crop"
                            alt="Profile"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#00FF9D] border-2 border-[#14141F] rounded-full"></div>
                    </div>

                    {/* Info & Actions Wrapper */}
                    <div className="flex flex-1 flex-col md:flex-row items-center md:items-start xl:items-center justify-between gap-6 w-full">

                        {/* User Info */}
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold mb-1">Jagadesh Jayaraj</h1>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-gray-400 mb-3">
                                <span className="text-[#00FF9D]">@jagadesh_design</span>
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                <span>Joined Dec 2023</span>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 bg-[#14141F] hover:bg-black text-white px-4 py-2 rounded-full text-xs font-medium transition-colors border border-gray-700"
                                >
                                    <span className="text-gray-400">{isCopied ? "Copied!" : personalWeb}</span>
                                    <svg className="text-[#00FF9D]" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                                <button className="bg-[#00FF9D] hover:bg-[#00cc7d] text-black px-6 py-2 rounded-full text-xs font-bold transition-colors shadow-[0_0_15px_rgba(0,255,157,0.3)]">
                                    + Create
                                </button>
                            </div>
                        </div>

                        {/* Simple Stats - Uploaded & Purchased */}
                        <div className="flex items-center gap-6 bg-[#14141F]/50 px-8 py-4 rounded-2xl border border-white/5">
                            <div className="text-center">
                                <div className="text-lg font-bold text-white">12</div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Uploaded Files</div>
                            </div>
                            <div className="w-px h-8 bg-white/10"></div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-white">{purchasedDesigns.length}</div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Purchased Files</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex items-center gap-8 border-b border-gray-800 mb-10 overflow-x-auto">
                    {[
                        { id: 'bio', label: 'Bio & Settings' },
                        { id: 'purchased', label: 'Purchased' },
                        { id: 'liked', label: 'Liked' },
                        { id: 'yourdesigns', label: 'Your Designs' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-4 text-sm font-bold tracking-wide transition-all relative ${activeTab === tab.id
                                ? 'text-white'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00FF9D] rounded-t-full shadow-[0_-2px_10px_rgba(0,255,157,0.5)]"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {activeTab === 'bio' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Settings Form */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="bg-[#343444] p-8 rounded-[30px] border border-gray-800">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <svg className="text-[#00FF9D]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                        Profile Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-400">Display Name</label>
                                            <input type="text" defaultValue="Jagadesh Jayaraj" className="w-full bg-[#14141F] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-400">Username</label>
                                            <input type="text" defaultValue="jagadesh_design" className="w-full bg-[#14141F] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-bold text-gray-400">Bio</label>
                                            <textarea rows={4} defaultValue="I do Designs and Stuffs!!!!!! Creating digital masterpieces in the metaverse." className="w-full bg-[#14141F] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] outline-none transition-all resize-none"></textarea>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-400">Email Address</label>
                                            <input type="email" defaultValue="hello@jagadesh.design" className="w-full bg-[#14141F] border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D] outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-400">Unique ID</label>
                                            <input type="text" defaultValue="0x71C7656EC7ab88b098defB751B7401B5f6d89A23" disabled className="w-full bg-[#14141F]/50 border border-gray-800 rounded-xl px-4 py-3 text-gray-500 cursor-not-allowed" />
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <button className="bg-[#00FF9D] hover:bg-[#00cc7d] text-black font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-[#00FF9D]/20">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Info */}
                            <div className="space-y-6">
                                <div className="bg-[#343444] p-6 rounded-[30px] border border-gray-800">
                                    <h4 className="font-bold mb-4 text-gray-200">Social Connections</h4>
                                    <div className="space-y-3">
                                        <button className="w-full flex items-center justify-between p-3 bg-[#14141F] rounded-xl border border-gray-700 hover:border-[#00FF9D] transition-colors group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-lg flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                                </div>
                                                <span className="text-sm font-medium">Twitter</span>
                                            </div>
                                            <span className="text-xs text-[#00FF9D]">Connected</span>
                                        </button>
                                        <button className="w-full flex items-center justify-between p-3 bg-[#14141F] rounded-xl border border-gray-700 hover:border-[#00FF9D] transition-colors group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-[#5865F2]/20 text-[#5865F2] rounded-lg flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /><path d="M7.5 7.2c.3-.8 1-1.5 1.5-1.5C12 5 12 5 12 5s0 0 3 1c.5 0 1.2.7 1.5 1.5.7 2 1.3 5 1.3 5s0 2.2-1.3 4c-.7 1-1.8 1.5-1.8 1.5l-1-1.2c.8-.2 1.4-.7 1.4-.7s-1 1-6 1-6-1-6-1c0 0 .6.5 1.4.7l-1 1.2s-1.1-.5-1.8-1.5C1.2 14.2 1.2 12 1.2 12s.6-3 1.3-5Z" /></svg>
                                                </div>
                                                <span className="text-sm font-medium">Discord</span>
                                            </div>
                                            <span className="text-xs text-gray-500 group-hover:text-white">Connect</span>
                                        </button>
                                        <button className="w-full flex items-center justify-between p-3 bg-[#14141F] rounded-xl border border-gray-700 hover:border-[#00FF9D] transition-colors group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-[#E1306C]/20 text-[#E1306C] rounded-lg flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                                </div>
                                                <span className="text-sm font-medium">Instagram</span>
                                            </div>
                                            <span className="text-xs text-gray-500 group-hover:text-white">Connect</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'purchased' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold">Purchased Items <span className="text-gray-500 text-sm font-normal ml-2">({purchasedDesigns.length})</span></h3>
                                <div className="flex gap-2">
                                    <select className="bg-[#343444] border-none text-sm rounded-lg px-3 py-2 outline-none cursor-pointer">
                                        <option>Recently Added</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                            <ProfileDesignGrid items={purchasedDesigns} />
                            <Pagination />
                        </div>
                    )}

                    {activeTab === 'liked' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold">Liked Items <span className="text-gray-500 text-sm font-normal ml-2">({likedDesigns.length})</span></h3>
                                <div className="flex gap-2">
                                    <select className="bg-[#343444] border-none text-sm rounded-lg px-3 py-2 outline-none cursor-pointer">
                                        <option>Recently Liked</option>
                                        <option>Most Popular</option>
                                    </select>
                                </div>
                            </div>
                            <ProfileDesignGrid items={likedDesigns} />
                            <Pagination />
                        </div>
                    )}
                    {activeTab === 'yourdesigns' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold">Your Designs <span className="text-gray-500 text-sm font-normal ml-2">({yourDesigns.length})</span></h3>
                                <div className="flex gap-2">
                                    <select className="bg-[#343444] border-none text-sm rounded-lg px-3 py-2 outline-none cursor-pointer">
                                        <option>Recently Added</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                            <ProfileDesignGrid items={purchasedDesigns} />
                            <Pagination />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}