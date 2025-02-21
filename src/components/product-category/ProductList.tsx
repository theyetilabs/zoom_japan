import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Heart, Maximize2 } from "lucide-react";

interface ProductListProps {
  categoryId: string;
}

const products: Product[] = [
  {
    id: "canon-ef",
    title: "Canon EF 70-200mm f/4 L USM",
    price: 699.99,
    image: "/products/canon-lens.jpg",
  },
  {
    id: "canon-eos",
    title: "Canon EOS 7D Mark II",
    price: 1799.99,
    image: "/products/canon-camera.jpg",
  },
  {
    id: "dji-osmo",
    title: "DJI Osmo Active Camera",
    price: 349.0,
    oldPrice: 399.0,
    image: "/products/dji-osmo.jpg",
  },
  {
    id: "gopro-hero7",
    title: "GoPro HERO7 Black",
    price: 342.78,
    image: "/products/gopro.jpg",
  },
];

export function ProductList({ categoryId }: ProductListProps) {
  return (
    <div className="flex-1">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing all 4 results</p>
        <Select defaultValue="default">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Default sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default sorting</SelectItem>
            <SelectItem value="popularity">Sort by popularity</SelectItem>
            <SelectItem value="rating">Sort by average rating</SelectItem>
            <SelectItem value="latest">Sort by latest</SelectItem>
            <SelectItem value="price-low">
              Sort by price: low to high
            </SelectItem>
            <SelectItem value="price-high">
              Sort by price: high to low
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-lg border bg-white p-4 transition-shadow hover:shadow-lg"
          >
            <div className="relative mb-4 aspect-square">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            <Link href={`/product/${product.id}`}>
              <h3 className="mb-2 text-sm font-medium text-gray-900 hover:text-purple-600">
                {product.title}
              </h3>
            </Link>

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
  );
}
