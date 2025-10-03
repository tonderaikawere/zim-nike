import { Card, CardContent } from "./ui/card";
import { Dumbbell, Footprints, Trophy } from "lucide-react";

const categories = [
  {
    id: 1,
    icon: Footprints,
    title: "Running",
    description: "Built for speed and endurance",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: 2,
    icon: Trophy,
    title: "Basketball",
    description: "Dominate the court in style",
    color: "bg-red-500/10 text-red-500",
  },
  {
    id: 3,
    icon: Dumbbell,
    title: "Training",
    description: "Power through every workout",
    color: "bg-green-500/10 text-green-500",
  },
];

export const FeaturedCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Shop by Sport</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect gear for your athletic journey
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-border/50 hover:border-secondary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className={`inline-flex p-6 rounded-full ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
