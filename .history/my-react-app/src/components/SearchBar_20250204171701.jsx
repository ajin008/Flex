import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = async () => {
    if (!query) return;
    try {
      const response = await axios.get(
        "http://localhost:12500/user/StockSearch",
        {
          params: { query },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4">
      <div className="flex items-center bg-[#212227] rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="flex-grow px-4 py-2 text-white bg-transparent outline-none rounded-l-full"
          placeholder="Search..."
        />
        <motion.button
          className="px-4 py-2 bg-btn2 hover:bg-[#9d7cff] transition-colors rounded-full"
          whileTap={{ scale: 0.85 }}
        >
          <Search className="text-white" size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default SearchBar;
