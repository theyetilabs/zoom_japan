import { Navbar } from "@/components/layout/Navbar";
import { HeroSlider } from "@/components/home/HeroSlider";
import { FeatureCards } from "@/components/home/FeatureCards";
import { Categories } from "@/components/home/Categories";
import { ProductGrid } from "@/components/home/ProductGrid";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { PopularArticles } from "@/components/home/PopularArticles";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <FeatureCards />
      <Categories />
      <ProductGrid />
      <CategoryShowcase />
      <PopularArticles />
      <Newsletter />
      <Footer />
    </div>
  );
}
