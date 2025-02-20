"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "prices", label: "Alle priser" },
  { id: "reviews", label: "Anmeldelser" },
  { id: "history", label: "Prishistorikk" },
  { id: "info", label: "Info" },
];

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState("prices");

  return (
    <div className="mt-16">
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "border-b-2 px-4 pb-4 text-sm font-medium",
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {activeTab === "prices" && <div>{/* Price comparison content */}</div>}
        {activeTab === "reviews" && <div>{/* Reviews content */}</div>}
        {activeTab === "history" && <div>{/* Price history graph */}</div>}
        {activeTab === "info" && <div>{/* Product information */}</div>}
      </div>
    </div>
  );
}
