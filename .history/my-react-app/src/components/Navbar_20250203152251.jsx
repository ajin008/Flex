import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black fixed bottom-0 w-full p-4 flex justify-between items-center text-white shadow-lg">
      <div className="text-xl font-bold">Flux</div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
          Index
        </button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
          News
        </button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
          Top Picks
        </button>
      </div>
      <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
        Sign In
      </button>
    </nav>
  );
}
