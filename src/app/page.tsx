import { Navbar } from "@/components/layout/Navbar";
import { HeroSlider } from "@/components/home/HeroSlider";
import { FeatureCards } from "@/components/home/FeatureCards";
import { Categories } from "@/components/home/Categories";
import { ProductGrid } from "@/components/home/ProductGrid";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <FeatureCards />
      <Categories />
      <ProductGrid />
      <CategoryShowcase />
    </div>
  );
}
