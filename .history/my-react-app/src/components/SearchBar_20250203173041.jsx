import React, { useState } from "react";
import { Search } from "lucide-react"; // Importing the Search icon from lucide-react

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center max-w-6xl mx-auto bg-[#1D1D1D] rounded-full p-2 sm:w-[300px] md:w-[400px] lg:w-164 backdrop-blur-md backdrop-brightness-110 bg-opacity-30 shadow-lg">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        className="w-full px-2 py-1 text-sm text-gray-700 outline-none"
        placeholder="Search..."
      />
      <button>
        <Search className="text-gray-600 mr-2" size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
