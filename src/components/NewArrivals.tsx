import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const NewArrivals = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Just Dropped</h2>
              <p className="text-muted-foreground text-lg">
                Fresh styles, hot off the production line
              </p>
            </div>
            <Button variant="ghost" className="hidden md:flex gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group cursor-pointer overflow-hidden border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    New
                  </Badge>
                  <div className="text-center text-primary-foreground p-8">
                    <h3 className="text-3xl font-bold mb-2">Air Max Elite</h3>
                    <p className="text-lg mb-4">The future of running</p>
                    <Button variant="secondary" size="lg">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group cursor-pointer overflow-hidden border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Limited Edition
                  </Badge>
                  <div className="text-center text-white p-8">
                    <h3 className="text-3xl font-bold mb-2">Court Legend</h3>
                    <p className="text-lg mb-4">Elevated basketball performance</p>
                    <Button variant="default" size="lg">
                      Explore
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
