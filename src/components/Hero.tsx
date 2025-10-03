import React from "react";
import { Button } from "./ui/button";
import heroShoe from "@/assets/shoe-1.jpg";
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
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-black/10 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-secondary/15 to-black/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-black/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-black rounded-full animate-bounce" style={{ animationDelay: "1.2s" }}></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "2.1s" }}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-black rounded-full animate-bounce" style={{ animationDelay: "0.8s" }}></div>
      </div>
      
      <div className="nike-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <h1 className="nike-hero-text text-black leading-none">
              Just
              <br />
              <span className="text-secondary">Do It</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed">
              Unleash your potential with Nike's latest innovation. Performance meets style in every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                className="nike-button text-sm px-6 py-2"
                onClick={handleShopNow}
              >
                Shop Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
              <button 
                className="nike-button-secondary text-sm px-6 py-2"
                onClick={handleLearnMore}
              >
                Explore Collection
              </button>
            </div>
          </div>
          
          <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
            {/* Main Hero Shoe with enhanced animations */}
            <div className="relative z-10 transform hover:scale-110 hover:rotate-3 transition-all duration-1000 animate-float">
              <img
                src={heroShoe}
                alt="Nike Hero Shoe"
                className="w-full h-auto object-contain max-w-lg mx-auto transform hover:rotate-6 transition-transform duration-700 animate-wiggle"
                style={{ 
                  filter: 'drop-shadow(0 35px 60px rgba(0, 0, 0, 0.2)) drop-shadow(0 15px 25px rgba(255, 105, 0, 0.1))',
                  background: 'transparent'
                }}
              />
              
              {/* Glowing effect behind shoe */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20 blur-2xl animate-glow" style={{ animationDelay: "0.5s" }}></div>
            </div>
            
            {/* Dynamic Shoe Illustrations */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Floating shoe silhouettes with bounce animation */}
              <div className="absolute top-10 left-10 opacity-15 animate-float transform hover:scale-110 transition-transform" style={{ animationDelay: "0.2s" }}>
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                  <path d="M5 25C5 25 15 15 30 15C45 15 55 25 55 25C55 30 50 35 30 35C10 35 5 30 5 25Z" fill="currentColor"/>
                  <path d="M15 20C15 20 20 18 30 18C40 18 45 20 45 20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              <div className="absolute bottom-16 right-8 opacity-20 animate-float transform hover:scale-110 transition-transform" style={{ animationDelay: "1.3s" }}>
                <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                  <path d="M10 30C10 30 20 20 40 20C60 20 70 30 70 30C70 35 65 40 40 40C15 40 10 35 10 30Z" fill="currentColor"/>
                  <path d="M20 25C20 25 25 23 40 23C55 23 60 25 60 25" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              <div className="absolute top-1/2 -left-8 opacity-12 animate-float transform hover:scale-110 transition-transform" style={{ animationDelay: "2.1s" }}>
                <svg width="50" height="35" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                  <path d="M5 20C5 20 12 12 25 12C38 12 45 20 45 20C45 25 40 30 25 30C10 30 5 25 5 20Z" fill="currentColor"/>
                </svg>
              </div>
              
              {/* Animated Nike Swoosh elements */}
              <div className="absolute top-20 right-16 opacity-30 animate-pulse transform hover:scale-125 transition-all duration-500" style={{ animationDelay: "0.7s" }}>
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 18C2 18 15 2 38 2C38 8 25 14 2 18Z" fill="#FF6900" className="animate-pulse"/>
                </svg>
              </div>
              
              <div className="absolute bottom-20 left-12 opacity-25 animate-pulse transform hover:scale-125 transition-all duration-500" style={{ animationDelay: "1.8s" }}>
                <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 13C2 13 10 2 28 2C28 6 20 10 2 13Z" fill="#FF6900" className="animate-pulse"/>
                </svg>
              </div>
              
              {/* Additional dynamic elements */}
              <div className="absolute top-32 left-1/2 opacity-10 animate-spin" style={{ animationDuration: "20s", animationDelay: "1s" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                </svg>
              </div>
              
              <div className="absolute bottom-32 right-1/3 opacity-15 animate-ping" style={{ animationDelay: "2.5s" }}>
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
              </div>
            </div>
            
            {/* Subtle geometric elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-black/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
