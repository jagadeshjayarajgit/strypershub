"use client";
import DesignBlocks from "@/components/ui/DesignBlocks";
import Header from "@/components/ui/Header";
import Pagination from "@/components/ui/Pagination";
import { useState } from "react";

const FilterDropdown = ({ options, value, onChange }: { options: string[], value: string, onChange: (value: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 min-w-[160px] justify-between hover:bg-gray-700 transition-colors"
      >
        <span className="text-sm">{value}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700 min-w-[160px] z-20 overflow-hidden">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-gray-700 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function ExplorePage() {
  const [category, setCategory] = useState('All categories');
  const [buyType, setBuyType] = useState('Buy Now');
  const [items, setItems] = useState('All Items');
  const [artworks, setArtworks] = useState('All Artworks');
  const [sortBy, setSortBy] = useState('Sort by');

  return (
    <main className="container mx-auto px-6 pt-12 pb-20">
      <h1 className="text-4xl font-bold mb-8">Explore Page</h1>
      {/* Filters Section */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        {/* Left side filters */}
        <div className="flex flex-wrap items-center gap-4">
          <FilterDropdown
            options={['All categories', 'Art', 'Photography', 'Music', 'Video', '3D Models']}
            value={category}
            onChange={setCategory}
          />

          <FilterDropdown
            options={['Buy Now', 'On Auction', 'New', 'Has Offers']}
            value={buyType}
            onChange={setBuyType}
          />

          <FilterDropdown
            options={['All Items', 'Single Items', 'Bundles']}
            value={items}
            onChange={setItems}
          />
        </div>

        {/* Right side filters */}
        <div className="flex flex-wrap items-center gap-4 ml-auto">
          <FilterDropdown
            options={['All Artworks', 'Featured', 'Trending', 'Recent']}
            value={artworks}
            onChange={setArtworks}
          />

          <FilterDropdown
            options={['Sort by', 'Recently Added', 'Price: Low to High', 'Price: High to Low', 'Most Liked']}
            value={sortBy}
            onChange={setSortBy}
          />
        </div>
      </div>
      <DesignBlocks />

      <Pagination />

    </main>
  );
}