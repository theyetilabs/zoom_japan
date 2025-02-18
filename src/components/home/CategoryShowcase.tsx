import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const categories: CategoryItem[] = [
  {
    id: "skincare",
    title: "Skincare",
    description:
      "Explore a handpicked selection of skincare products focused on anti-aging and longevity. These scientifically-formulated treatments help rejuvenate skin, reduce signs of aging, and promote a youthful, vibrant complexion for long-term skin health.",
    image: "/showcase/skincare.jpg",
    link: "/category/skincare",
  },
  {
    id: "home-office",
    title: "Home Office Health Management",
    description:
      "Here you will find ergonomic office chairs, time management tools, desk organizers, and blue light blocking glasses to boost your comfort, productivity, and health in your home office. Optimize your workspace for better focus and well-being.",
    image: "/showcase/home-office.jpg",
    link: "/category/home-office",
  },
  {
    id: "personal-care",
    title: "Other Personal Care Essentials",
    description:
      "Here you will find DIY journal kits, luxurious spa gift baskets, orthotic slippers, and colorful bath bombs to elevate your self-care routine. Perfect for creativity, relaxation, and comfort, these items support your well-being and mindfulness.",
    image: "/showcase/personal-care.jpg",
    link: "/category/personal-care",
  },
  {
    id: "accessories",
    title: "Skin-Friendly Accessories",
    description:
      "Explore our preselected collection of accessories that support a healthy, balanced lifestyle without compromising on style. Featuring hypoallergenic jewelry, perfumes, and toxin-free personal care products for your well-being.",
    image: "/showcase/accessories.jpg",
    link: "/category/accessories",
  },
];

export function CategoryShowcase() {
  return (
    <section className="relative bg-gray-50 py-16">
      {/* Navigation Menu */}
      <div className="container mx-auto mb-8 px-4">
        <div className="flex items-center justify-center space-x-8 text-sm">
          {[
            "Personal Care Essentials",
            "Healthy Diet & Tools",
            "Adaptogens & Supplements",
            "Physical Fitness",
            "Deep Sleep",
            "Mental Health & Stress Management",
            "Pet Longevity",
            "Longevity Destinations",
          ].map((item, index) => (
            <button
              key={index}
              className={`rounded-full px-4 py-2 transition-colors hover:text-purple-600 ${index === 0 ? "bg-blue-100 text-blue-600" : "text-gray-600"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Featured Category */}
          <div className="relative mb-8 h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/showcase/personal-care-hero.jpg"
              alt="Personal Care Essentials"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute bottom-8 left-8 max-w-xl text-white">
              <h2 className="mb-4 text-4xl font-bold">
                Personal Care Essentials
              </h2>
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.link}
                className="group flex items-center space-x-4 rounded-lg bg-white p-4 transition-shadow hover:shadow-lg"
              >
                <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
