import React, { useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const StockChart = () => {
  const [query, setQuery] = useState("");
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchSubmit = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:12500/user/StockSearch?query=${query}`
      );
      setStockData(response.data.data);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 p-2 rounded-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 bg-transparent text-white outline-none"
          placeholder="Enter stock symbol (e.g. AAPL)"
        />
        <button
          onClick={handleSearchSubmit}
          className="bg-blue-600 px-4 py-2 rounded-full text-white"
        >
          Search
        </button>
      </div>

      {/* Show Chart if Data Exists */}
      {loading ? (
        <p className="text-center text-white mt-4">Loading...</p>
      ) : stockData ? (
        <div className="mt-6">
          <h2 className="text-center text-white text-xl font-bold">{query} Stock Price</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockData}>
              <XAxis dataKey="time" tick={{ fill: "#fff" }} />
              <YAxis tick={{ fill: "#fff" }} />
              <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
              <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-center text-white mt-4">No data available</p>
      )}
    </div>
  );
};

export default StockChart;
