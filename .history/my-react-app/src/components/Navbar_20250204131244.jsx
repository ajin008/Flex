import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import getStartedBtn from "./GetStartedBtn";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Index", "News", "Top Picks"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">Flux</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center w-full absolute left-0">
          <div className="flex space-x-2 bg-zinc-800 rounded-full px-4 py-1">
            {navItems.map((item) => (
              <button
                key={item}
                className="px-3 py-1 text-white hover:bg-purple-600 rounded-full transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right-aligned Buttons (Login, Sign in, Mobile Menu) */}
        <div className="flex items-center space-x-4">
          {/* Login and Sign in Buttons (hidden on mobile) */}
          <getStartedBtn />

          {/* Mobile Menu Button (visible on mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-800 z-50">
          <div className="flex flex-col">
            {/* Navigation Items */}
            {navItems.map((item) => (
              <button
                key={item}
                className="w-full text-left px-4 py-3 text-white hover:bg-purple-600 transition-colors"
              >
                {item}
              </button>
            ))}

            {/* Login and Sign in Buttons */}
            <div className="flex flex-col space-y-2 px-4 py-3">
              <getStartedBtn />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
