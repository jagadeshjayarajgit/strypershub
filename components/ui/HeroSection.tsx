import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Content - Text */}
            <div className="flex-1 text-center lg:text-left z-10 relative">

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                    Discover, find, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-400 font-extrabold tracking-tight">
                        Sell extraordinary
                    </span> <br />
                    Designs
                </h1>

                <p className="mt-6 text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 font-light">
                    A <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-400 font-extrabold tracking-tight">STRYPE</span> Company Initiative
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                    <Link href="/explore" className="flex items-center gap-2 px-8 py-3.5 bg-transparent border border-green-500 rounded-full text-white font-semibold hover:bg-green-600 hover:border-green-600 transition-all group">
                        <svg className="group-hover:-translate-y-0.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                        Explore
                    </Link>
                    <Link href="/createitem" className="flex items-center gap-2 px-8 py-3.5 bg-transparent border border-green-500 rounded-full text-white font-semibold hover:bg-green-600 hover:border-green-600 transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                        Create
                    </Link>
                </div>
            </div>

            {/* Right Content - Image & Background */}
            <div className="flex-1 relative w-full flex justify-center lg:justify-end">
                {/* Neon Green Blob Background SVG */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-0 opacity-80">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#14532d" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.4,70.9,32.2C59.6,43,48.3,51.8,36.4,59.6C24.5,67.4,12,74.2,-1.2,76.3C-14.4,78.4,-28.8,75.8,-41.7,68.6C-54.6,61.4,-66,49.6,-74.3,36.1C-82.6,22.6,-87.8,7.4,-85.9,-7.1C-84,-21.6,-75,-35.4,-64.1,-46.4C-53.2,-57.4,-40.4,-65.6,-27.2,-73.5C-14,-81.4,-0.4,-89,14.1,-87.6C28.6,-86.2,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
                        {/* Stroke Outline */}
                        <path fill="none" stroke="#22c55e" strokeWidth="0.5" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.4,70.9,32.2C59.6,43,48.3,51.8,36.4,59.6C24.5,67.4,12,74.2,-1.2,76.3C-14.4,78.4,-28.8,75.8,-41.7,68.6C-54.6,61.4,-66,49.6,-74.3,36.1C-82.6,22.6,-87.8,7.4,-85.9,-7.1C-84,-21.6,-75,-35.4,-64.1,-46.4C-53.2,-57.4,-40.4,-65.6,-27.2,-73.5C-14,-81.4,-0.4,-89,14.1,-87.6C28.6,-86.2,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100) scale(1.4)" />
                    </svg>
                </div>

                {/* Character Image Placeholder */}
                {/* Note: Replace '/character.png' with your actual 3D image file */}
                <div className="relative z-10 w-[350px] h-[450px] lg:w-[450px] lg:h-[550px]">
                    {/* Using a gray placeholder div if image is missing, otherwise use next/image */}
                    <div className="w-full h-full flex items-center justify-center">
                        {/* Replace this Image tag with your asset */}
                        <img
                            src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1000&auto=format&fit=crop"
                            alt="3D Character"
                            className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 mask-image-gradient"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}