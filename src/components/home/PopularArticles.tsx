import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  image: string;
  link: string;
}

const articles: Article[] = [
  {
    id: "1",
    title:
      "Natural Remedies For A Better Night's Sleep: Tips To Sleep Better Without Pills",
    image: "/articles/sleep.jpg",
    link: "/articles/natural-sleep-remedies",
  },
  {
    id: "2",
    title:
      "How To Enhance Your Immune Resilience: 7 Proven Strategies For Longevity And Health",
    image: "/articles/immune.jpg",
    link: "/articles/immune-resilience",
  },
  {
    id: "3",
    title:
      "Prevention Is Key: 4 Essential Habits To Keep Your Senior Dog's Brain Sharp",
    image: "/articles/dog.jpg",
    link: "/articles/senior-dog-health",
  },
  {
    id: "4",
    title:
      "Weight Loss Resolution 2023: Getting Inspired By Christian Bale's Transformative Journey",
    image: "/articles/weight-loss.jpg",
    link: "/articles/weight-loss-journey",
  },
];

export function PopularArticles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Popular Articles
          </h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.link}
              className="group overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-blue-600">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
