import React, { useState } from "react";
import { Search, Heart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ShoppingCart } from "./ShoppingCart";
import { useSearch } from "@/contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { performSearch, searchResults, isSearching, clearSearch } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      scrollToTop();
    }
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    scrollToTop();
    setIsSearchOpen(false);
    clearSearch();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <button 
            onClick={() => handleNavClick("/")}
            className="text-2xl font-bold tracking-tight hover:text-secondary transition-colors"
          >
            NIKE
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => handleNavClick("/new-featured")}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              New & Featured
            </button>
            <button 
              onClick={() => handleNavClick("/men")}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Men
            </button>
            <button 
              onClick={() => handleNavClick("/women")}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Women
            </button>
            <button 
              onClick={() => handleNavClick("/kids")}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Kids
            </button>
            <button 
              onClick={() => handleNavClick("/sale")}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Sale
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <form onSubmit={handleSearch} className="hidden sm:flex items-center gap-2 rounded-full bg-muted px-4 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value) {
                    performSearch(e.target.value);
                    setIsSearchOpen(true);
                  } else {
                    setIsSearchOpen(false);
                    clearSearch();
                  }
                }}
                onFocus={() => searchQuery && setIsSearchOpen(true)}
                className="bg-transparent text-sm outline-none w-40"
              />
              {searchQuery && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0"
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                    clearSearch();
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </form>
            
            {/* Search Results Dropdown */}
            {isSearchOpen && searchQuery && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                {isSearching ? (
                  <div className="p-4 text-center text-muted-foreground">Searching...</div>
                ) : searchResults.length > 0 ? (
                  <div className="p-2">
                    <div className="text-xs text-muted-foreground p-2 border-b">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                    </div>
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="w-full flex items-center gap-3 p-3 hover:bg-muted rounded-md transition-colors text-left"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{product.name}</h4>
                          <p className="text-xs text-muted-foreground">{product.category}</p>
                          <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-muted-foreground">
                    No products found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};
