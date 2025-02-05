import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import GetStartedBtn from "./GetStartedBtn";

const Navbar = (setActivePage, activePage) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { value: "index", name: "Index" },
    { value: "news", name: "News" },
    { value: "topPicks", name: "Top Picks" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (value) => {
    setActivePage(value);
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <nav className="relative w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Flux</div>

        {/* Desktop Navigation */}
        

        {/* Right-aligned Buttons */}
        <div className="flex items-center space-x-4">
          <GetStartedBtn />

          {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-800 z-50">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavItemClick(item.value)}
                className="w-full text-left px-4 py-3 text-white hover:bg-purple-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
