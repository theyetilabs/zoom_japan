import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, ShoppingCart, ChevronDown, User } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/zoom-logo.png"
                alt="Zoom-JP"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Search */}
            <div className="mx-8 flex max-w-xl flex-1 items-center space-x-0">
              <Input
                type="search"
                placeholder="Search"
                className="w-full rounded-r-none border-r-0 focus-visible:ring-0"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-l-none border-l-0 px-4 font-normal"
                  >
                    All categories
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>Electronics</DropdownMenuItem>
                  <DropdownMenuItem>Clothing</DropdownMenuItem>
                  <DropdownMenuItem>Home & Garden</DropdownMenuItem>
                  <DropdownMenuItem>Sports</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <Link
                href="/login"
                className="flex items-center text-sm text-gray-700"
              >
                <User className="mr-2 h-5 w-5" />
                Login
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center text-sm text-gray-700"
              >
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </Link>
              <Link
                href="/cart"
                className="flex items-center text-sm text-gray-700"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                <span>$0.00</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-[#F4A460] py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-4 py-2 text-white hover:bg-white/10 hover:text-white"
                >
                  Browse Categories
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Category 1</DropdownMenuItem>
                <DropdownMenuItem>Category 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 hover:text-white"
                  >
                    Woocommerce Layouts
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Layout 1</DropdownMenuItem>
                  <DropdownMenuItem>Layout 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 hover:text-white"
                  >
                    Review Layouts
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Layout 1</DropdownMenuItem>
                  <DropdownMenuItem>Layout 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 hover:text-white"
                  >
                    Promo pages
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Promo 1</DropdownMenuItem>
                  <DropdownMenuItem>Promo 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Vendor Store
              </Button>

              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Sellers
              </Button>

              <Button
                variant="ghost"
                className="relative text-white hover:bg-white/10 hover:text-white"
              >
                Tutorials
                <span className="absolute -right-2 -top-2 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
                  HOT
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
