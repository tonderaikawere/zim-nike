import React, { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { allProducts } from "@/contexts/SearchContext";
import kidsCollection from "@/assets/kids-collection.jpg";
import { Filter, Heart, ShoppingCart } from "lucide-react";

// Get kids products from the main product database
const kidsProducts = allProducts.filter(product => product.gender === 'kids');

const Kids = () => {
  useScrollToTop();
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>(["All"]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Featured");
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredProducts = useMemo(() => {
    let filtered = kidsProducts;

    // Filter by age group
    if (!selectedAgeGroups.includes("All")) {
      filtered = filtered.filter(product => 
        selectedAgeGroups.some(age => {
          if (age === "Little Kids (10.5C-3Y)") return product.ageGroup === 'little-kids';
          if (age === "Big Kids (3.5Y-7Y)") return product.ageGroup === 'big-kids';
          return false;
        })
      );
    }

    // Filter by category
    if (!selectedCategories.includes("All")) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(product => {
        const price = product.price;
        return selectedPriceRanges.some(range => {
          if (range === "Under $50") return price < 50;
          if (range === "$50 - $70") return price >= 50 && price <= 70;
          if (range === "Over $70") return price > 70;
          return false;
        });
      });
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
  }, [selectedAgeGroups, selectedCategories, selectedPriceRanges, sortBy]);

  const handleAgeGroupChange = (ageGroup: string) => {
    if (ageGroup === "All") {
      setSelectedAgeGroups(["All"]);
    } else {
      setSelectedAgeGroups(prev => {
        const newAgeGroups = prev.filter(age => age !== "All");
        if (newAgeGroups.includes(ageGroup)) {
          const filtered = newAgeGroups.filter(age => age !== ageGroup);
          return filtered.length === 0 ? ["All"] : filtered;
        } else {
          return [...newAgeGroups, ageGroup];
        }
      });
    }
  };

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

  const handleQuickAdd = (product: typeof kidsProducts[0], e: React.MouseEvent) => {
    e.stopPropagation();
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      size: "12C", // Default kids size
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
        <section className="relative h-[400px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={kidsCollection} alt="Kids Collection" className="w-full h-full object-cover" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Kids Collection
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Built for play, made for champions. Let them run, jump, and explore in style.
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
                    <h4 className="font-semibold text-sm">Age Group</h4>
                    <div className="space-y-2">
                      {["All", "Little Kids (10.5C-3Y)", "Big Kids (3.5Y-7Y)"].map((age) => (
                        <label key={age} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="rounded" 
                            checked={selectedAgeGroups.includes(age)}
                            onChange={() => handleAgeGroupChange(age)}
                          />
                          <span className="text-sm">{age}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Category</h4>
                    <div className="space-y-2">
                      {["All", "Running", "Basketball", "Lifestyle", "Training"].map((cat) => (
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
                      {["Under $50", "$50 - $70", "Over $70"].map((range) => (
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
                      key={product.id}
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
                            {product.ageGroup === 'little-kids' ? 'Little Kids' : 'Big Kids'}
                          </div>
                        </div>
                        <div className="p-6 space-y-2">
                          <p className="text-xs text-muted-foreground uppercase">{product.category}</p>
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

export default Kids;
