import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollToTop, scrollToTop } from "@/hooks/use-scroll-to-top";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { allProducts } from "@/contexts/SearchContext";
import newFeaturedHero from "@/assets/new-featured-hero.jpg";
import { Heart, ShoppingCart, Star, TrendingUp, Zap, ArrowRight } from "lucide-react";
import shoe1 from '@/assets/shoe-1.jpg';
import shoe2 from '@/assets/shoe-2.jpg';
import shoe3 from '@/assets/shoe-3.jpg';
import shoe4 from '@/assets/shoe-4.jpg';
import heroShoe from '@/assets/hero-shoe.jpg';

const featuredProducts = [
  {
    id: '5',
    name: 'Air Max Elite',
    price: 140.00,
    originalPrice: 160.00,
    image: shoe1,
    category: 'Running',
    isNew: true,
    isFeatured: true,
    description: 'The future of running with advanced Air Max technology.',
    rating: 4.9,
    reviews: 234
  },
  {
    id: '6',
    name: 'Court Legend',
    price: 130.00,
    image: shoe2,
    category: 'Basketball',
    isNew: true,
    isFeatured: true,
    description: 'Elevated basketball performance with legendary court presence.',
    rating: 4.8,
    reviews: 189
  },
  {
    id: '1',
    name: 'Air Force Runner',
    price: 95.00,
    originalPrice: 120.00,
    image: shoe3,
    category: 'Running',
    isFeatured: true,
    description: 'Experience unmatched comfort and performance.',
    rating: 4.7,
    reviews: 324
  },
  {
    id: '2',
    name: 'Court Vision Pro',
    price: 120.00,
    image: shoe4,
    category: 'Basketball',
    isFeatured: true,
    description: 'Dominate the court with superior performance.',
    rating: 4.6,
    reviews: 156
  }
];

const NewFeatured = () => {
  useScrollToTop();
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={heroShoe} alt="Featured Collection" className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-4">
                New & Featured
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Latest
                <br />
                <span className="text-secondary">Innovations</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Discover our newest releases and featured collections. From cutting-edge technology to timeless designs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Button variant="hero" size="lg" className="gap-2">
                  Shop New Arrivals
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/20 text-black hover:bg-primary-foreground/10">
                  View Featured
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Featured Collection</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Handpicked selections featuring our latest innovations and customer favorites
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleProductClick(product.id)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && (
                          <Badge variant="destructive" className="text-xs">
                            NEW
                          </Badge>
                        )}
                        {product.originalPrice && (
                          <Badge variant="secondary" className="text-xs">
                            SALE
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-background/80 backdrop-blur-sm hover:bg-background"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Heart className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-background/80 backdrop-blur-sm hover:bg-background"
                          onClick={(e) => handleQuickAdd(product, e)}
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </Button>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {product.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">Running</h3>
                        <p className="text-blue-100 mb-4">Performance & Comfort</p>
                        <Button 
                          variant="secondary"
                          onClick={() => {
                            navigate("/search?category=Running");
                            scrollToTop();
                          }}
                        >
                          Shop Running
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gradient-to-br from-orange-500 to-red-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">Basketball</h3>
                        <p className="text-orange-100 mb-4">Court Dominance</p>
                        <Button 
                          variant="secondary"
                          onClick={() => {
                            navigate("/search?category=Basketball");
                            scrollToTop();
                          }}
                        >
                          Shop Basketball
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gradient-to-br from-green-500 to-emerald-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">Training</h3>
                        <p className="text-green-100 mb-4">Versatile Performance</p>
                        <Button 
                          variant="secondary"
                          onClick={() => {
                            navigate("/search?category=Training");
                            scrollToTop();
                          }}
                        >
                          Shop Training
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewFeatured;
