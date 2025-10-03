import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollToTop, scrollToTop } from "@/hooks/use-scroll-to-top";
import { Search, Home, ShoppingBag, ArrowRight, Package } from "lucide-react";

const NotFound = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if it's a product page
  const isProductPage = location.pathname.includes('/product/');
  const isSearchPage = location.pathname.includes('/search');

  const handleNavigation = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Error Icon */}
            <div className="flex justify-center">
              {isProductPage ? (
                <Package className="h-24 w-24 text-muted-foreground" />
              ) : (
                <Search className="h-24 w-24 text-muted-foreground" />
              )}
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-primary">404</h1>
              <h2 className="text-3xl font-semibold">
                {isProductPage ? "Product Not Found" : "Page Not Found"}
              </h2>
              <p className="text-muted-foreground text-lg">
                {isProductPage 
                  ? "The product you're looking for doesn't exist or may have been discontinued."
                  : "The page you're looking for doesn't exist or has been moved."
                }
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleNavigation("/")} 
                size="lg"
                className="gap-2"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
              
              {isProductPage && (
                <Button 
                  variant="outline"
                  onClick={() => handleNavigation("/search")} 
                  size="lg"
                  className="gap-2"
                >
                  <Search className="h-5 w-5" />
                  Browse Products
                </Button>
              )}
            </div>

            {/* Suggestions */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">You might be interested in:</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleNavigation("/men")}>
                  <CardContent className="p-6 text-center">
                    <ShoppingBag className="h-8 w-8 mx-auto mb-3 text-secondary" />
                    <h4 className="font-semibold mb-2">Men's Collection</h4>
                    <p className="text-sm text-muted-foreground">Discover the latest in men's athletic wear</p>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleNavigation("/women")}>
                  <CardContent className="p-6 text-center">
                    <ShoppingBag className="h-8 w-8 mx-auto mb-3 text-secondary" />
                    <h4 className="font-semibold mb-2">Women's Collection</h4>
                    <p className="text-sm text-muted-foreground">Explore women's performance gear</p>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleNavigation("/just-dropped")}>
                  <CardContent className="p-6 text-center">
                    <Package className="h-8 w-8 mx-auto mb-3 text-secondary" />
                    <h4 className="font-semibold mb-2">Just Dropped</h4>
                    <p className="text-sm text-muted-foreground">Check out our latest releases</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  onClick={() => handleNavigation("/contact")}
                  className="gap-2"
                >
                  Contact Support
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleNavigation("/order-status")}
                  className="gap-2"
                >
                  Track Your Order
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
