import React, { useState } from "react";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Index");

  return (
    <nav className="p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">Flux</div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div className="bg-btn rounded-full p-1">
            <div className="flex space-x-1">
              {["Index", "News", "Top Picks"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveButton(item)}
                  className={`
                    px-4 py-1 text-sm text-white rounded-full
                    transition-all duration-300 ease-in-out
                    hover:bg-zinc-700 relative
                    ${activeButton === item ? "nav-glow" : ""}
                  `}
                >
                  {item}
                  {activeButton === item && (
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="bg-btn text-white text-sm px-4 py-1 rounded-full transition-all duration-300 hover:bg-[#D9D9D9] hover:text-black hover:shadow-lg">
          Sign in
        </button>
      </div>

      <style jsx>{`
        .nav-glow {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2),
            0 0 20px rgba(255, 255, 255, 0.1);
        }

        @keyframes subtle-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        button:hover {
          animation: subtle-bounce 1s ease infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
