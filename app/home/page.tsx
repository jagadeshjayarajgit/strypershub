import FeaturedDesigns from "@/components/ui/FeaturedDesigns";
import HeroSection from "@/components/ui/HeroSection";

export default function HomePage() {
    return (
        <main className="container mx-auto px-6 pt-12 pb-20">
            <HeroSection />
            <FeaturedDesigns />
        </main>
    );
}