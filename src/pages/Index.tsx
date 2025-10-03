import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { ProductGrid } from "@/components/ProductGrid";
import { NewArrivals } from "@/components/NewArrivals";
import { BenefitsSection } from "@/components/BenefitsSection";
import { Testimonials } from "@/components/Testimonials";
import { BrandStory } from "@/components/BrandStory";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Index = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <BenefitsSection />
        <FeaturedCategories />
        <ProductGrid />
        <NewArrivals />
        <BrandStory />
        <Testimonials />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
