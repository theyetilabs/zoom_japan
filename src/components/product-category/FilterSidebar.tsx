import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export function FilterSidebar() {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="rounded-lg border bg-white p-6">
        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold">Filter by price</h2>
          <Slider
            defaultValue={[340, 1800]}
            max={2000}
            min={0}
            step={1}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm">
            <span>Price: $340 — $1,800</span>
          </div>
          <Button className="mt-4 w-full bg-red-500 hover:bg-red-600">
            FILTER
          </Button>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold">Color</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="black" />
              <label htmlFor="black" className="text-sm">
                Black (2)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="gold" />
              <label htmlFor="gold" className="text-sm">
                Gold (1)
              </label>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold">Memory</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="64gb" />
              <label htmlFor="64gb" className="text-sm">
                64GB (1)
              </label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Average rating</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="5star" />
              <label htmlFor="5star" className="flex items-center text-sm">
                ★★★★★ (2)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
