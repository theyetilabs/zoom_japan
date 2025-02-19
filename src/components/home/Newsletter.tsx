import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            SUBSCRIBE NOW
          </h2>
          <p className="mb-8 text-gray-600">
            We will keep you posted with the best tips, top products, and
            destinations for a long, healthy life. No spam—ever, promise!
          </p>

          <div className="flex items-center justify-center space-x-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="max-w-sm"
            />
            <Button className="bg-blue-500 hover:bg-blue-600">→</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
