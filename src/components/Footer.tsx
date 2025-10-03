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
    <footer className="bg-black text-white">
      <div className="nike-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">FIND A STORE</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavClick("/store-locator")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Find a Store
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/auth")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Become a Member
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/newsletter")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Sign Up for Email
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/contact")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Send Us Feedback
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">GET HELP</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavClick("/order-status")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Order Status
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/delivery")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Delivery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/returns")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Returns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/contact")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">ABOUT NIKE</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavClick("/news")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/careers")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/investors")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Investors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("/sustainability")}
                  className="hover:text-secondary transition-colors text-left block w-full"
                >
                  Sustainability
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6">FOLLOW US</h3>
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
        <div className="pt-12 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <p className="text-center lg:text-left">© 2025 Nike E-Commerce by Tonde. All Rights Reserved</p>
            <p className="text-center lg:text-right">
              <span className="text-secondary font-semibold">Developed by Tonde</span> | 
              Nike-inspired design for educational purposes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
