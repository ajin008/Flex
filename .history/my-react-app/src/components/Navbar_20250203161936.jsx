import React from "react";

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">Flux</div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div className="bg-zinc-800 rounded-full p-1">
            <div className="flex space-x-1">
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
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="bg-btn text-white text-sm px-4 py-1 rounded-full hover:bg-[#]">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
