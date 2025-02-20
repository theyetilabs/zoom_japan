import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbPath {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  paths: BreadcrumbPath[];
}

export function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {paths.map((path, index) => (
          <li key={path.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            )}
            {index === paths.length - 1 ? (
              <span className="text-sm text-gray-500">{path.name}</span>
            ) : (
              <Link
                href={path.href}
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {path.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
