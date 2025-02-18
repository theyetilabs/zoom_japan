export interface NavItem {
  title: string;
  href: string;
  isHot?: boolean;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Category {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  discount?: number;
  rating?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}
