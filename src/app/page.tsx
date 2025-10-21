import BestCategory from "@/components/share/BestCategory";
import BestSellingProduct from "@/components/share/BestSellingProduct";
import BrowseCategory from "@/components/share/BrowseCategory";
import { Header } from "@/components/share/Header";
import HeroSection from "@/components/share/HeroSection";
import PromotionalBanner from "@/components/share/PromotionalBanner";

export default function Home() {
  return (
    <div className="main-h-screen">
      <Header />
      <main>
        {/* Hero section */}
        <HeroSection />

        {/* Best Selling Products */}
        <BestSellingProduct />

        {/* Promotional banner */}
        <PromotionalBanner />

        {/* Categories sections */}

         {/* Best Selling Products */}
        <BestSellingProduct />

        {/* Browse catogory */}
        <BrowseCategory></BrowseCategory>

        {/* best category */}
        <BestCategory></BestCategory>
      </main>
    </div>
  );
}
