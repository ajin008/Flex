import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Index");

  const navItems = ["Index", "News", "Top Picks"];

  return (
    <nav className="p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-white text-xl font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Flux
        </motion.div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div className="bg-btn rounded-full p-1">
            <div className="flex space-x-1 relative">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => setActiveButton(item)}
                  className={`
                    px-4 py-1 text-sm text-white rounded-full
                    relative z-10
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeButton === item && (
                    <motion.div
                      className="absolute inset-0 bg-zinc-700 rounded-full -z-10"
                      layoutId="activeBackground"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Sign In Button */}
        <motion.button
          className="bg-btn text-white text-sm px-4 py-1 rounded-full"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#D9D9D9",
            color: "black",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          Sign in
        </motion.button>
      </div>

      {/* Background Glow Effect */}
      {activeButton && (
        <motion.div
          className="fixed inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            transition: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
          }}
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(255,255,255,0.06), 
              transparent 40%)`,
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
