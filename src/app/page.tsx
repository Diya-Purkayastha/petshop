import BestCategory from "@/components/share/BestCategory";
import BestSellingProduct from "@/components/share/BestSellingProduct";
import BlogSection from "@/components/share/BlogSection";
import BrowseCategory from "@/components/share/BrowseCategory";
import Footer from "@/components/share/Footer";
import { Header } from "@/components/share/Header";
import HeroSection from "@/components/share/HeroSection";
import LogoSection from "@/components/share/LogoSection";
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

        {/* blog section */}
        <BlogSection></BlogSection>

        {/* logo section */}
        <LogoSection></LogoSection>

        {/* footer */}
        <Footer></Footer>
      </main>
    </div>
  );
}
