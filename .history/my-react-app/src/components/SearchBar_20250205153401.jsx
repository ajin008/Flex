import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-fox-toast";
import "react-fox-toast/dist/index.css";

const SearchBar = ({ setStockData }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = async () => {
    if (!query) return;
    console.log("This is my query:", query);
    try {
      const response = await axios.get(
        `http://localhost:12500/user/StockSearch?query=${encodeURIComponent(
          query
        )}`
      );
      if (response.data && response.data.length === 0) {
        toast.warning("No stock found for the given query!", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.success("Stock data fetched successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setStockData(response.data);
      }
    } catch (error) {
      toast.error("Error fetching stock data. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Error fetching stock data:", error);
    }
  };

  const handleClearSearch = () => {
    setQuery("");
    setStockData(null);
  };

  return (
    <div className="max-w-xl mx-auto px-4">
      <div className="flex items-center bg-[#212227] rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="flex-grow px-4 py-2 text-white bg-transparent outline-none rounded-l-full"
          placeholder="Search for stocks or indices (e.g., RELIANCE, NIFTY 50)"
        />
        {query && (
          <motion.button
            onClick={handleClearSearch}
            className="px-2 text-gray-300 hover:text-white transition-colors"
            whileTap={{ scale: 0.85 }}
          >
            <X className="text-white" size={20} />
          </motion.button>
        )}
        <motion.button
          onClick={handleSearchSubmit}
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
