import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="flex items-center bg-[#212227] rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="flex-grow px-4 py-2 text-white bg-transparent outline-none rounded-l-full"
          placeholder="Search..."
        />
      </div>
      
    </div>
  );
};

export default SearchBar;
