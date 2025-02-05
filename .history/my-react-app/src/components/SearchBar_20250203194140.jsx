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
      <div className="flex items-center bg-[#212227] rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="flex-grow px-4 py-2 text-white bg-transparent outline-none rounded-l-full"
          placeholder="Search..."
        />
        <motion.button
          className="bg-btn2  py-2 text-white rounded-full p-2"
          whileHover={{ scale: 1.1 }} // Slightly increases size on hover
          whileTap={{ scale: 0.9 }} // Shrinks slightly when clicked
          transition={{ type: "spring", stiffness: 300 }} // Smooth spring animation
        >
          <Search className="text-[#eef0fc] mr-2" size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default SearchBar;
