import { Truck, Shield, CreditCard, Gift } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      title: "Fast delivery",
      description: "At a good time for you",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Equipment insurance",
      description: "Protects financial cost",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      title: "Installment and credit",
      description: "Buy now and pay later",
    },
    {
      icon: <Gift className="h-6 w-6 text-blue-500" />,
      title: "Earn bonuses, rewards",
      description: "Discount and points",
    },
  ];

  return (
    <div className="container mx-auto -mt-8 px-4">
      <div className="grid grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 rounded-lg bg-white p-6 shadow-lg"
          >
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
