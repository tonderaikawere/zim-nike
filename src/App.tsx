import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { SearchProvider } from "@/contexts/SearchContext";
import Index from "./pages/Index";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Sale from "./pages/Sale";
import NewFeatured from "./pages/NewFeatured";
import SearchResults from "./pages/SearchResults";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Auth from "./pages/Auth";
import OrderSuccess from "./pages/OrderSuccess";
import Contact from "./pages/Contact";
import StoreLocator from "./pages/StoreLocator";
import Newsletter from "./pages/Newsletter";
import OrderStatus from "./pages/OrderStatus";
import Careers from "./pages/Careers";
import JustDropped from "./pages/JustDropped";
import AboutUs from "./pages/AboutUs";
import Sustainability from "./pages/Sustainability";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendering...");
  
  return (
  <QueryClientProvider client={queryClient}>
    <SearchProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/new-featured" element={<NewFeatured />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/store-locator" element={<StoreLocator />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/order-status" element={<OrderStatus />} />
              <Route path="/delivery" element={<Contact />} />
              <Route path="/returns" element={<Contact />} />
              <Route path="/news" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<Contact />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/just-dropped" element={<JustDropped />} />
              <Route path="/about-us" element={<AboutUs />} />
              {/* Redirect any unknown routes to home page */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </SearchProvider>
  </QueryClientProvider>
  );
};

export default App;
