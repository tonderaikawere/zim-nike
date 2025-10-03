import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "@/hooks/use-scroll-to-top";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">FIND A STORE</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => handleNavClick("/store-locator")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Find a Store
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/auth")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Become a Member
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/newsletter")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Sign Up for Email
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/contact")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Send Us Feedback
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">GET HELP</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => handleNavClick("/order-status")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Order Status
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/delivery")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Delivery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/returns")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Returns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/contact")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ABOUT NIKE</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => handleNavClick("/news")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/careers")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/investors")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Investors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/sustainability")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Sustainability
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">FOLLOW US</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 Nike E-Commerce by Tonde. All Rights Reserved</p>
            <p className="text-center">
              <span className="text-secondary font-semibold">Developed by Tonde</span> | 
              Nike-inspired design for educational purposes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
