import React, { useState } from "react";
import { Search } from "lucide-react"; // Importing the Search icon from lucide-react

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center  max-w-6xl mx-auto  rounded-full p-2 w-164">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        className="w-full px-2 py-1 text-sm text-gray-700  "
        placeholder="Search..."
      />
      <button>
        <Search className="text-gray-600 mr-2" size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
