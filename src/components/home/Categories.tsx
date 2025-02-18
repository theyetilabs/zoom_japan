import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Category {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

const categories: Category[] = [
  {
    title: "Audio & Television",
    description: "MP3 & MP4 Players, Speakers, TV Boxes, TV sets",
    image: "/categories/audio-tv.png",
    imageAlt: "TV and Audio devices",
    href: "/category/audio-television",
  },
  {
    title: "Camera & Photo",
    description:
      "Digital Cameras, Photo Accessories, Action Cameras, Demo Cameras",
    image: "/categories/camera.png",
    imageAlt: "Camera equipment",
    href: "/category/camera-photo",
  },
  {
    title: "Clothing & Apparel",
    description: "Kid's Fashion, Shoes, Woman Fashion, Bags",
    image: "/categories/clothing.png",
    imageAlt: "Fashion items",
    href: "/category/clothing-apparel",
  },
  {
    title: "Computers & IT Accessories",
    description:
      "Monitors, Networking Products, PC & Notebooks, Tablets & Phones, Router",
    image: "/categories/computers.png",
    imageAlt: "Computer accessories",
    href: "/category/computers-it",
  },
  {
    title: "Health & Beauty",
    description: "Makeup, Perfumer, Hair Care",
    image: "/categories/health.png",
    imageAlt: "Health and beauty products",
    href: "/category/health-beauty",
  },
  {
    title: "Jewelry & Watches",
    description:
      "Men's Watches, Smart Watches, Women's Watches, Fashion Jewelry",
    image: "/categories/jewelry.png",
    imageAlt: "Jewelry and watches",
    href: "/category/jewelry-watches",
  },
  {
    title: "Outdoors & Sports",
    description: "Cycling",
    image: "/categories/sports.png",
    imageAlt: "Sports equipment",
    href: "/category/outdoors-sports",
  },
  {
    title: "Phones & Accessories",
    description: "Smart Phones, Phone Accessories",
    image: "/categories/phones.png",
    imageAlt: "Phone accessories",
    href: "/category/phones-accessories",
  },
];

export function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <span className="text-sm text-gray-500">
            LOOKING FOR BEST E-COMMERCE THEME
          </span>
          <h2 className="mt-2 text-3xl font-bold">CHOOSE CATEGORY</h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-purple-600"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className={cn(
                "group flex items-center space-x-4 rounded-lg border p-4 transition-all hover:shadow-md",
                index === 0 && "bg-purple-50",
              )}
            >
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
