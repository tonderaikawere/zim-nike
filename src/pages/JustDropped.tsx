import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollToTop, scrollToTop } from '@/hooks/use-scroll-to-top';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { allProducts } from '@/contexts/SearchContext';
import { Heart, ShoppingCart, Star, ArrowRight, Zap, Clock } from 'lucide-react';
import shoe1 from '@/assets/shoe-1.jpg';
import shoe2 from '@/assets/shoe-2.jpg';
import shoe3 from '@/assets/shoe-3.jpg';
import shoe4 from '@/assets/shoe-4.jpg';

const justDroppedProducts = [
  {
    id: 'jd-1',
    name: 'Air Max Elite',
    price: 140.00,
    originalPrice: 160.00,
    image: shoe1,
    category: 'Running',
    isNew: true,
    releaseDate: '2024-01-15',
    description: 'The future of running technology meets style'
  },
  {
    id: 'jd-2',
    name: 'Court Legend',
    price: 130.00,
    image: shoe2,
    category: 'Basketball',
    isNew: true,
    releaseDate: '2024-01-12',
    description: 'Elevated basketball performance for the modern athlete'
  },
  {
    id: 'jd-3',
    name: 'Street Runner Pro',
    price: 125.00,
    image: shoe3,
    category: 'Lifestyle',
    isNew: true,
    releaseDate: '2024-01-10',
    description: 'Urban style meets athletic performance'
  },
  {
    id: 'jd-4',
    name: 'Training Force X',
    price: 115.00,
    image: shoe4,
    category: 'Training',
    isNew: true,
    releaseDate: '2024-01-08',
    description: 'Maximum versatility for every workout'
  }
];

const JustDropped = () => {
  useScrollToTop();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleQuickAdd = (product: typeof justDroppedProducts[0], e: React.MouseEvent) => {
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

  const handleViewAll = () => {
    navigate("/search?new=true");
    scrollToTop();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-8 w-8" />
              <Badge className="bg-white text-secondary px-4 py-2 text-sm font-bold">
                JUST DROPPED
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Fresh Styles</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Hot off the production line. Get the latest drops before they're gone.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-secondary"
              onClick={handleViewAll}
            >
              View All New Releases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Latest Drops Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Drops</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Be the first to get your hands on our newest releases. Limited quantities available.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {justDroppedProducts.map((product, index) => (
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
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-secondary text-white">
                          <Clock className="h-3 w-3 mr-1" />
                          NEW
                        </Badge>
                      </div>
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
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(product.releaseDate).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">(4.8)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice.toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-80 bg-gradient-to-br from-blue-500 to-blue-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <h3 className="text-3xl font-bold mb-4">Air Max Elite</h3>
                        <p className="text-blue-100 mb-6">The future of running</p>
                        <Button 
                          variant="secondary"
                          onClick={() => {
                            navigate("/product/jd-1");
                            scrollToTop();
                          }}
                        >
                          Shop Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-yellow-400 text-black">
                      LIMITED EDITION
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-80 bg-gradient-to-br from-orange-500 to-red-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <h3 className="text-3xl font-bold mb-4">Court Legend</h3>
                        <p className="text-orange-100 mb-6">Elevated basketball performance</p>
                        <Button 
                          variant="secondary"
                          onClick={() => {
                            navigate("/product/jd-2");
                            scrollToTop();
                          }}
                        >
                          Explore
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Be the first to know about new drops, exclusive releases, and special offers.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-foreground"
                defaultValue="tondekawere@gmail.com"
              />
              <Button 
                variant="secondary"
                onClick={() => {
                  navigate("/newsletter");
                  scrollToTop();
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JustDropped;
