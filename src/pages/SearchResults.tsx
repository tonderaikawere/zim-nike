import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useSearch } from '@/contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { Heart, ShoppingCart, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SearchResults = () => {
  useScrollToTop();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  const { searchResults, performSearch, isSearching } = useSearch();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (query) {
      performSearch(query);
    } else if (category) {
      performSearch(category);
    }
  }, [query, category, performSearch]);

  const handleQuickAdd = (product: any, e: React.MouseEvent) => {
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
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-6 w-6 text-muted-foreground" />
            <h1 className="text-3xl font-bold">Search Results</h1>
          </div>
          
          {(query || category) && (
            <p className="text-muted-foreground">
              {isSearching ? (
                `Searching for "${query || category}"...`
              ) : (
                `${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} found for "${query || category}"`
              )}
            </p>
          )}
        </div>

        {isSearching ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Searching products...</p>
            </div>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product, index) => (
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
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
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
                    <Badge className="absolute bottom-4 left-4">
                      {product.category}
                    </Badge>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                      <Badge variant="outline" className="text-xs">
                        {product.gender}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No results found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any products matching "{query}". Try adjusting your search terms.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Suggestions:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Check your spelling</li>
                <li>Try more general terms</li>
                <li>Try different keywords</li>
              </ul>
            </div>
            <Button 
              onClick={() => navigate('/')} 
              className="mt-6"
            >
              Browse All Products
            </Button>
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Start your search</h2>
            <p className="text-muted-foreground">
              Use the search bar above to find your perfect Nike products.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
