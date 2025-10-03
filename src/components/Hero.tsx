import React from "react";
import { Button } from "./ui/button";
import heroShoe from "@/assets/hero-shoe.jpg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

export const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/new-featured");
    scrollToTop();
  };

  const handleLearnMore = () => {
    // Scroll to the next section (BenefitsSection)
    const benefitsSection = document.querySelector('[data-section="benefits"]');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
              New Arrival
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Step Into
              <br />
              <span className="text-secondary">Greatness</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-md">
              Experience unmatched comfort and style with our latest collection. Designed for champions, made for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="gap-2"
                onClick={handleShopNow}
              >
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground/20 text-black bg-primary-foreground hover:bg-primary-foreground/90"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <img
                src={heroShoe}
                alt="Nike Hero Shoe"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full scale-75" />
          </div>
        </div>
      </div>
    </section>
  );
};
