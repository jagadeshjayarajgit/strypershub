import FeaturedDesigns from "@/components/ui/FeaturedDesigns";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-6 pt-12 pb-20">
      <HeroSection />
      <FeaturedDesigns />
    </main>
  );
}