import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { allProducts } from "@/contexts/SearchContext";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Get featured products from the main product database
const featuredProducts = allProducts.slice(0, 4);

export const ProductGrid = () => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleQuickAdd = (product: typeof featuredProducts[0], e: React.MouseEvent) => {
    e.stopPropagation();
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      size: "10", // Default size for quick add
    };

    addItem(cartItem);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="nike-section-padding bg-white">
      <div className="nike-container">
        <div className="mb-16 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black">
            Featured Collection
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our hand-picked selection of premium footwear, engineered for peak performance and designed for champions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="nike-card group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
                    onClick={(e) => handleQuickAdd(product, e)}
                  >
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </button>
                </div>
                
                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-black group-hover:text-secondary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-black">${product.price.toFixed(2)}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 4 ? 'fill-secondary text-secondary' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">(4.5)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-16">
          <button 
            className="nike-button text-lg px-12 py-4"
            onClick={() => navigate('/new-featured')}
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
