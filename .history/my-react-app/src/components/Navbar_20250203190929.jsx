import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Index", "News", "Top Picks"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative w-full bg-zinc-900">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Flux</div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item}
                className="px-3 py-1 text-white hover:bg-purple-600 rounded-full transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button className="px-4 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            Sign in
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-800 z-50">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item}
                className="w-full text-left px-4 py-3 text-white hover:bg-purple-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="w-full text-left px-4 py-3 text-white hover:bg-purple-600 transition-colors">
              Sign in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
