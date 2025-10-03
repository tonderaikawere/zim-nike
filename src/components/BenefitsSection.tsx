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
  },
];

export const BenefitsSection = () => {
  return (
    <section data-section="benefits" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-secondary/10 text-secondary">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
