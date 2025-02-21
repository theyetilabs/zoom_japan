import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StarRating } from "@/components/product/StarRating";

export function ProductInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Garmin Forerunner 965
        </h1>
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center">
            <StarRating rating={3.7} />
            <span className="ml-2 text-sm text-gray-500">(8 anmeldelser)</span>
          </div>
          <span className="text-sm text-blue-600">Rangering 2</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-2xl font-bold">Nå 6 393,-</div>
        <p className="text-sm text-gray-600">
          Pulsmåler: Innebygd, Passform: Herre, Dame, Vannavstøtende{" "}
          <button className="text-blue-600">Les mer</button>
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Farge:</label>
          <Select defaultValue="all">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Velg farge" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle</SelectItem>
              <SelectItem value="black">Svart</SelectItem>
              <SelectItem value="white">Hvit</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex space-x-4">
          <Button size="lg" className="flex-1 bg-blue-500 hover:bg-blue-600">
            Få prisvarsel
          </Button>
          <Button size="lg" variant="outline">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <span className="font-medium">Pris (Lav - Høy)</span>
          <span className="font-medium">Levering</span>
        </div>
        <div className="mt-4 space-y-4">
          {[1, 2, 3].map((store) => (
            <div key={store} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-lg bg-gray-200" />
                <div>
                  <div className="font-medium">Store Name</div>
                  <div className="text-sm text-gray-500">Authorized Dealer</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">6 393,-</div>
                <div className="text-sm text-gray-500">1-5 dager</div>
              </div>
              <Button>Vis i butikk</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
