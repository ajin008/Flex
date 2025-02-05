import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Index", "News", "Top Picks"];

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          className="text-white text-xl font-semibold hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Flux
        </motion.div>

        {/* Navigation Links */}
        <div className="flex justify-center">
          <div className="bg-zinc-800 rounded-full p-1">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  className="
            px-4 py-1 text-sm text-white rounded-full
            relative z-10 hover:bg-zinc-700 rounded-full
          "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Sign In Button */}
        <motion.button
          className="bg-zinc-800 text-white text-sm px-4 py-1 rounded-full"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#D9D9D9",
            color: "black",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Sign in
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between">
        <motion.div
          className="text-white text-xl font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Flux
        </motion.div>

        <div className="flex items-center space-x-2">
          <motion.button
            className="bg-zinc-800 text-white text-sm px-3 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign in
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:bg-zinc-800 rounded-full"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 mt-2 bg-zinc-800 rounded-lg py-2 shadow-lg md:hidden"
        >
          <button className="w-full text-left px-4 py-2 text-white hover:bg-zinc-700">
            Index
          </button>
          <button className="w-full text-left px-4 py-2 text-white hover:bg-zinc-700">
            News
          </button>
          <button className="w-full text-left px-4 py-2 text-white hover:bg-zinc-700">
            Top Picks
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
