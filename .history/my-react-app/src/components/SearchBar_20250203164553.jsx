import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-full p-2 w-150">
      <Search className="text-gray-600 mr-2" size={20} /> {/* Search Icon */}
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        className="w-full px-2 py-1 text-sm text-gray-700 focus:outline-none"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
