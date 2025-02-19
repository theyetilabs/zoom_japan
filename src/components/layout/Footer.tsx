import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/zoom-logo.png"
                alt="Zoom Japan"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Learn more about how our site works.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <div className="mt-4 flex flex-col space-y-2 text-sm text-gray-600">
                <Link href="/home">Home</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/about">About Us</Link>
                <Link href="/articles">Articles</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Contact</h3>
              <div className="mt-4">
                <p className="text-sm text-gray-600">info@zoomjapan.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-8">
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-blue-500">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-500">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-500">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-500">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-500">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
