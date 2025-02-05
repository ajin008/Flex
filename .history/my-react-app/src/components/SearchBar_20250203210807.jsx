import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="flex items-center bg-[#212227] rounded-full overflow-hidden shadow-md w-80">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="flex-grow px-4 py-2 text-white bg-transparent outline-none rounded-l-full"
          placeholder="Search..."
        />
        <motion.button
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-colors rounded-full"
          whileTap={{ scale: 0.85 }}
        >
          <Search className="text-white" size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default SearchBar;
