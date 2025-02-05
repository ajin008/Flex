import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-6xl mx-auto">
      {/* Logo */}
      <motion.div
        className="text-white text-xl font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Flux
      </motion.div>

      {/* Navigation Links */}
      <div className="flex justify-center">
        <div className="bg-zinc-800 rounded-full p-1">
          <div className="flex space-x-1">
            <button className="px-4 py-1 text-sm text-white hover:bg-zinc-700 rounded-full">
              Index
            </button>
            <button className="px-4 py-1 text-sm text-white hover:bg-zinc-700 rounded-full">
              News
            </button>
            <button className="px-4 py-1 text-sm text-white hover:bg-zinc-700 rounded-full">
              Top Picks
            </button>
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
    </nav>
  );
};

export default Navbar;
