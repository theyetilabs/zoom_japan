import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Heart, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  discount?: number;
  rating?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    title: "DJI Osmo Active Camera",
    price: 359.0,
    oldPrice: 349.0,
    image: "/products/dji-osmo.png",
    isNew: true,
  },
  {
    id: "2",
    title: "Xiaomi Redmi Note 7",
    price: 699.99,
    image: "/products/redmi-note.png",
    rating: 4.3,
  },
  {
    id: "3",
    title: "Product with 360 gallery",
    price: 111.99,
    image: "/products/chairs.png",
    discount: 65,
  },
  {
    id: "4",
    title: "Charging Dock Stand Station Charger Holder For Apple",
    price: 88.88,
    image: "/products/dock.png",
    discount: 11,
    isBestSeller: true,
  },
  {
    id: "5",
    title: "Dynacraft 24' Boys' Tony Hawk Aftermath Bike",
    price: 143.99,
    image: "/products/bike.png",
  },
];

type TabType = "latest" | "all" | "popular" | "rated";

export function ProductGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h2 className="border-b-2 border-purple-600 pb-2 text-xl font-semibold">
              Latest products
            </h2>
            <div className="flex items-center space-x-6 text-gray-500">
              <button className="hover:text-purple-600">Show all</button>
              <button className="hover:text-purple-600">Popular</button>
              <button className="hover:text-purple-600">Best rated</button>
            </div>
          </div>
          <Button variant="outline" className="text-sm">
            Choose category +
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-lg border bg-white p-4 transition-shadow hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative mb-4 aspect-square">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
                {product.isNew && (
                  <span className="absolute left-2 top-2 rounded bg-green-500 px-2 py-1 text-xs text-white">
                    4.3
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute right-0 top-0 bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                    BEST SELLER
                  </span>
                )}
                {product.discount && (
                  <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Product Info */}
              <Link href={`/product/${product.id}`}>
                <h3 className="mb-2 text-sm font-medium text-gray-900 hover:text-purple-600">
                  {product.title}
                </h3>
              </Link>

              {/* Price */}
              <div className="mb-4 flex items-baseline space-x-2">
                <span className="text-lg font-semibold text-red-500">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                <button className="text-gray-400 hover:text-purple-600">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-purple-600">
                  <Maximize2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
