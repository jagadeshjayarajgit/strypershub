"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function UploadDesignPage() {
    // State for form fields to make the preview reactive
    const [form, setForm] = useState({
        price: "",
        title: "",
        description: "",
        royalties: "",
        size: "",
        category: "Abstraction",
    });

    const [activeMethod, setActiveMethod] = useState("fixed");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section className="relative min-h-screen bg-[#0d0d11] text-white py-16 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
                        Upload <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Design</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Share your creative masterpiece with the world. Upload your design, set the price, and let the community discover your art.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT COLUMN: PREVIEW (4 Cols) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Design Preview
                            </h3>

                            {/* Preview Card */}
                            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-[30px] border border-white/10 shadow-2xl hover:border-green-500/30 transition-all duration-500 group">

                                {/* Image Area */}
                                <div className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-[#1a1a24] mb-6 shadow-inner group-hover:shadow-green-500/10 transition-all">
                                    {/* Placeholder Image */}
                                    <Image
                                        src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1000&auto=format&fit=crop"
                                        alt="Preview"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>


                                </div>

                                {/* Card Details */}
                                <div className="space-y-5">
                                    <div className="flex justify-between items-start">
                                        <h5 className="text-white font-bold text-xl truncate pr-2 flex-1">
                                            {form.title || '"Cyber Doberman #766"'}
                                        </h5>
                                        <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-green-500/20">Available</span>
                                    </div>

                                    <div className="flex items-center justify-between border-b border-white/5 pb-5">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10">
                                                <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="Creator" fill className="object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-gray-400 text-[10px] uppercase tracking-wide">Creator</span>
                                                <span className="text-white text-xs font-bold">Jagadesh Jayaraj</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-gray-400 text-[10px] uppercase tracking-wide">Current Bid</span>
                                            <div className="flex flex-col items-end">
                                                <span className="text-white text-base font-bold">₹ 20,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm pt-1">
                                        <button className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 transition-all shadow-lg shadow-green-500/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT COLUMN: FORM (8 Cols) */}
                    <div className="lg:col-span-8">

                        {/* Upload Section */}
                        <div className="mb-10">
                            <h3 className="text-xl font-bold mb-4 text-gray-200">Upload Design Asset</h3>
                            <div className="border-2 border-dashed border-gray-700 hover:border-green-500/50 rounded-2xl p-4 flex flex-col items-center justify-center gap-4 bg-white/5 transition-all group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                    <svg className="text-gray-400 group-hover:text-green-400 transition-colors" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-semibold text-lg mb-1">Drag and drop your design here</p>
                                    <p className="text-gray-400 text-sm">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                                </div>
                                <button className="mt-2 px-6 py-2.5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors text-sm">
                                    Browse Files
                                </button>
                            </div>
                        </div>

                        {/* Select Method */}
                        <div className="mb-10">
                            <h3 className="text-xl font-bold mb-4 text-gray-200">Select Method</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { id: 'fixed', label: 'Fixed Price', icon: <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" /> },
                                ].map((method) => (
                                    <button
                                        key={method.id}
                                        onClick={() => setActiveMethod(method.id)}
                                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border transition-all duration-300 font-bold text-sm
                                            ${activeMethod === method.id
                                                ? 'bg-green-500 text-black border-green-500 shadow-lg shadow-green-500/20'
                                                : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20 hover:bg-white/10'}`}
                                    >
                                        <svg className={`${activeMethod === method.id ? 'text-black' : 'text-gray-400'} w-4 h-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {method.icon}
                                        </svg>
                                        {method.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Inputs Section */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                {/* Title */}
                                <div className="space-y-2">
                                    <label className="font-bold text-lg text-gray-200">Design Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        placeholder='e.g. "Cyber Doberman #766"'
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                                    />
                                </div>

                                {/* Description */}
                                <div className="space-y-2">
                                    <label className="font-bold text-lg text-gray-200">Description</label>
                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder='Tell the story behind your design...'
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Grid Inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Price */}
                                <div className="space-y-2">
                                    <label className="font-bold text-lg text-gray-200">Price</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="price"
                                            value={form.price}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 text-white placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                                        />
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">Ξ</div>
                                    </div>
                                    {/* INR Estimation Helper */}
                                    {form.price && !isNaN(parseFloat(form.price)) && (
                                        <p className="text-xs text-gray-400 text-right">
                                            ≈ ₹ {(parseFloat(form.price) * 250000).toLocaleString('en-IN')}
                                        </p>
                                    )}
                                </div>

                                {/* Size */}
                                <div className="space-y-2">
                                    <label className="font-bold text-lg text-gray-200">Size</label>
                                    <input
                                        type="text"
                                        name="size"
                                        value={form.size}
                                        onChange={handleChange}
                                        placeholder='e.g. "1000x1000"'
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                                    />
                                </div>

                                {/* Category */}
                                <div className="space-y-2">
                                    <label className="font-bold text-lg text-gray-200">Category</label>
                                    <div className="relative">
                                        <select
                                            name="category"
                                            value={form.category}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none appearance-none cursor-pointer"
                                        >
                                            <option className="bg-[#14141F]" value="Abstraction">Abstraction</option>
                                            <option className="bg-[#14141F]" value="Art">Art</option>
                                            <option className="bg-[#14141F]" value="Music">Music</option>
                                            <option className="bg-[#14141F]" value="Photography">Photography</option>
                                        </select>
                                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-8 border-t border-white/10 flex justify-end">
                                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1 transform">
                                    Upload Design
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}