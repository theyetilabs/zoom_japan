import { Breadcrumb } from "@/components/product-category/Breadcrumb";
import { FilterSidebar } from "@/components/product-category/FilterSidebar";
import { ProductList } from "@/components/product-category/ProductList";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function CategoryPage() {
  const params = {
    id: "1",
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb category="Camera & Photo" />

        <h1 className="mb-8 text-3xl font-bold">Camera & Photo</h1>

        <div className="flex gap-8">
          <FilterSidebar />
          <ProductList categoryId={params.id} />
        </div>
      </div>
    </div>
  );
}
