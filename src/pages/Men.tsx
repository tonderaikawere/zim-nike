import React, { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import menCollection from "@/assets/men-collection.jpg";
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";
import shoe4 from "@/assets/shoe-4.jpg";
import { Filter, Heart, ShoppingCart } from "lucide-react";

const products = [
  { id: "1", name: "Air Zoom Pegasus", price: 125.00, category: "Running", image: shoe1, priceRange: "$100 - $150", size: ["8", "9", "10", "11", "12"] },
  { id: "2", name: "LeBron Witness", price: 140.00, category: "Basketball", image: shoe2, priceRange: "$100 - $150", size: ["9", "10", "11", "12", "13"] },
  { id: "3", name: "Metcon 8", price: 95.00, category: "Training", image: shoe3, priceRange: "Under $100", size: ["8", "9", "10", "11"] },
  { id: "4", name: "React Infinity", price: 110.00, category: "Running", image: shoe4, priceRange: "$100 - $150", size: ["8", "9", "10", "11", "12", "13"] },
  { id: "5", name: "Air Max 270", price: 135.00, category: "Lifestyle", image: shoe1, priceRange: "$100 - $150", size: ["9", "10", "11", "12"] },
  { id: "6", name: "KD Trey 5", price: 100.00, category: "Basketball", image: shoe2, priceRange: "$100 - $150", size: ["8", "9", "10", "11", "12"] },
  { id: "7", name: "Free RN 5.0", price: 90.00, category: "Running", image: shoe3, priceRange: "Under $100", size: ["8", "9", "10", "11", "12", "13"] },
  { id: "8", name: "Air Force 1", price: 105.00, category: "Lifestyle", image: shoe4, priceRange: "$100 - $150", size: ["8", "9", "10", "11", "12"] },
  { id: "5", name: "Air Max Elite", price: 140.00, category: "Running", image: shoe1, priceRange: "$100 - $150", size: ["9", "10", "11", "12", "13"] },
  { id: "6", name: "Court Legend", price: 130.00, category: "Basketball", image: shoe2, priceRange: "$100 - $150", size: ["8", "9", "10", "11", "12"] },
];

const Men = () => {
  useScrollToTop();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Featured");
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (!selectedCategories.includes("All")) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(product => 
        selectedPriceRanges.includes(product.priceRange)
      );
    }

    // Filter by size
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.size.some(size => selectedSizes.includes(size))
      );
    }

    // Sort products
    switch (sortBy) {
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Newest":
        // Keep original order for newest
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategories, selectedPriceRanges, selectedSizes, sortBy]);

  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories(prev => {
        const newCategories = prev.filter(cat => cat !== "All");
        if (newCategories.includes(category)) {
          const filtered = newCategories.filter(cat => cat !== category);
          return filtered.length === 0 ? ["All"] : filtered;
        } else {
          return [...newCategories, category];
        }
      });
    }
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(range) 
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleQuickAdd = (product: typeof products[0], e: React.MouseEvent) => {
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
        <section className="relative h-[400px] bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={menCollection} alt="Men's Collection" className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Men's Collection
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Gear designed for peak performance. From professional athletes to weekend warriors.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <aside className="md:w-64 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </h3>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Category</h4>
                    <div className="space-y-2">
                      {["All", "Running", "Basketball", "Training", "Lifestyle"].map((cat) => (
                        <label key={cat} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="rounded" 
                            checked={selectedCategories.includes(cat)}
                            onChange={() => handleCategoryChange(cat)}
                          />
                          <span className="text-sm">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Price Range</h4>
                    <div className="space-y-2">
                      {["Under $100", "$100 - $150", "Over $150"].map((range) => (
                        <label key={range} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="rounded" 
                            checked={selectedPriceRanges.includes(range)}
                            onChange={() => handlePriceRangeChange(range)}
                          />
                          <span className="text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Size</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {["8", "9", "10", "11", "12", "13"].map((size) => (
                        <Button 
                          key={size} 
                          variant={selectedSizes.includes(size) ? "default" : "outline"} 
                          size="sm"
                          onClick={() => handleSizeChange(size)}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              <div className="flex-1">
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-muted-foreground">Showing {filteredProducts.length} products</p>
                  <select 
                    className="border rounded-md px-4 py-2 text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <Card
                      key={`${product.id}-${index}`}
                      className="group cursor-pointer border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg overflow-hidden animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onClick={() => handleProductClick(product.id)}
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden bg-muted">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
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
                          <div className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            {product.category}
                          </div>
                        </div>
                        <div className="p-6 space-y-2">
                          <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Men;
