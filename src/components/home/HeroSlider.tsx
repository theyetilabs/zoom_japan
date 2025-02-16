import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSlider() {
  return (
    <div className="relative -z-10 min-h-[400px] overflow-hidden bg-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          <div className="max-w-md">
            <h1 className="mb-4 text-6xl font-bold">
              Season Sale
              <div className="flex items-baseline gap-2">
                <span className="text-7xl">30%</span>
                <span className="text-2xl text-red-500">Up to</span>
              </div>
            </h1>
            <p className="mb-8 text-xl">Enjoy the discounts whole season</p>
          </div>

          {/* Hero Image will be positioned absolutely */}
          <div className="absolute right-0 top-0 h-full w-1/2">
            {/* Add your hero image here */}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
