import React from 'react';

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}

export default function Pagination({
    currentPage = 1,
    totalPages = 10,
    onPageChange
}: PaginationProps) {
    // Logic to show limited pages with ellipsis would go here
    // For now, matching the static snippet's look but making it dynamic

    return (
        <div className="flex items-center justify-center py-8">
            <nav
                className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md shadow-xl shadow-green-900/5 transition-all duration-300 hover:border-green-900/30 hover:shadow-green-900/20"
                aria-label="Pagination"
            >
                <button
                    onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
                    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-gray-400 transition-all duration-300 hover:bg-green-900 hover:text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                </button>

                <div className="flex items-center gap-1">
                    <button
                        className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 ${currentPage === 1
                                ? 'bg-green-600 text-white shadow-[0_0_15px_rgba(22,163,74,0.5)] scale-110'
                                : 'text-gray-300 hover:bg-green-900 hover:text-green-100 hover:scale-105'
                            }`}
                    >
                        1
                    </button>

                    <button
                        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-green-900 hover:text-green-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    >
                        2
                    </button>

                    <button
                        className="hidden md:inline-flex relative h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-green-900 hover:text-green-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    >
                        3
                    </button>

                    <span className="relative inline-flex h-10 w-10 items-center justify-center text-sm font-semibold text-gray-500">
                        ...
                    </span>

                    <button
                        className="hidden md:inline-flex relative h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-green-900 hover:text-green-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    >
                        8
                    </button>

                    <button
                        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-green-900 hover:text-green-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    >
                        9
                    </button>

                    <button
                        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-green-900 hover:text-green-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    >
                        10
                    </button>
                </div>

                <button
                    onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
                    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-gray-400 transition-all duration-300 hover:bg-green-900 hover:text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </nav>
        </div>
    );
}
