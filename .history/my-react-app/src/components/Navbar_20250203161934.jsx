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
