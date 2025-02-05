import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Index", "News", "Top Picks"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
      },
    }),
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

        <div className="hidden md:flex items-center justify-center w-full absolute left-0">
          <motion.div
            className="flex space-x-2 bg-zinc-800 rounded-full px-4 py-1"
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                custom={index}
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 text-white hover:bg-purple-600 rounded-full transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.button
          className="bg-btn text-white text-sm px-4 py-1 rounded-full"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#653fd2",
            color: "white",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Sign in
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-zinc-800 z-50"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ backgroundColor: "#653fd2" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-left px-4 py-3 text-white hover:bg-purple-600 transition-colors"
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ backgroundColor: "#653fd2" }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-left px-4 py-3 text-white hover:bg-purple-600 transition-colors"
              >
                Sign in
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
