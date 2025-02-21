import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  category: string;
}

export function Breadcrumb({ category }: BreadcrumbProps) {
  return (
    <div className="mb-6 flex items-center space-x-2 text-sm text-gray-600">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span>{category}</span>
    </div>
  );
}
