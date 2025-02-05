import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ToggleSwitch from "../components/ToggleSwitch";
import HeroSection from "../components/HeroSection";
import StockChart from "../components/StockChart";

const Main = () => {
  const [stockData, setStockData] = useState(null);
  return (
    <div className="min-h-screen  text-white pt-7  ">
      <Navbar />
      <div className="container mx-auto px-4 pt-44">
        <SearchBar setStockData={setStockData} />

        {!stockData && <HeroSection />}
      </div>

      {/* Show StockChart only when stockData exists */}
      {stockData && (
        <div className="flex justify-center pt-10">
          <StockChart stockData={stockData} />
        </div>
      )}

      <div className="flex justify-center items-center pt-16">
        <ToggleSwitch />
      </div>
    </div>
  );
};

export default Main;
