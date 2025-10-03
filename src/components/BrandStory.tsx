import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const BrandStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Built for Athletes,
                <br />
                <span className="text-secondary">Made for Everyone</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our inception, we've been committed to bringing innovation and inspiration to every athlete in the world. If you have a body, you're an athlete. That's the belief that drives everything we do.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the streets of Harare to the courts of Bulawayo, we're proud to serve Zimbabwe's growing community of athletes and fitness enthusiasts with world-class footwear and unwavering support.
              </p>
              <Button variant="default" size="lg" className="gap-2">
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 p-12 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-secondary">15+</div>
                  <p className="text-xl font-semibold">Years of Excellence</p>
                  <div className="pt-8 space-y-2">
                    <div className="text-4xl font-bold">500K+</div>
                    <p className="text-muted-foreground">Happy Customers</p>
                  </div>
                  <div className="pt-8 space-y-2">
                    <div className="text-4xl font-bold">50+</div>
                    <p className="text-muted-foreground">Store Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
