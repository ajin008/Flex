import React, { useState } from "react";
import { Search } from "lucide-react"; // Importing the Search icon from lucide-react

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <button className="flex items-center border border-gray-300 rounded-full p-2 w-64 bg-dark">
      <Search className="text-gray-600 mr-2" size={20} /> 
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        className="w-full px-2 py-1 text-sm text-gray-700 focus:outline-none bg-transparent"
        placeholder="Search..."
      />
    </button>
  );
};

export default SearchBar;
