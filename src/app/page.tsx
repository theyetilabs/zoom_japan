import { Navbar } from "@/components/layout/Navbar";
import { HeroSlider } from "@/components/home/HeroSlider";
import { FeatureCards } from "@/components/home/FeatureCards";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <FeatureCards />
    </div>
  );
}
