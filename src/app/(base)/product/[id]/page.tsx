import { Breadcrumb } from "@/components/product/Breadcrumb";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductTabs } from "@/components/product/ProductTabs";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          paths={[
            { name: "Hjem", href: "/" },
            { name: "Telefon & GPS", href: "/category/electronics" },
            { name: "Wearables", href: "/category/wearables" },
            {
              name: "Pulsklokker og sportsklokker",
              href: "/category/sports-watches",
            },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProductGallery
            images={["/products/garmin-1.jpg", "/products/garmin-2.jpg"]}
          />
          <ProductInfo />
        </div>

        <ProductTabs />
      </div>
    </div>
  );
}
