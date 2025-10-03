import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On all orders over $100 across Zimbabwe",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% secure and encrypted transactions",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert help whenever you need it",
  },
];

export const BenefitsSection = () => {
  return (
    <section data-section="benefits" className="nike-section-padding bg-gray-50">
      <div className="nike-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center space-y-6 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex p-6 rounded-full bg-black text-white group-hover:bg-secondary transition-all duration-300 transform group-hover:scale-110">
                <benefit.icon className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-black">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
