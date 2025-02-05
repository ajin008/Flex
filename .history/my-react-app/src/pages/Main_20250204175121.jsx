import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ToggleSwitch from "../components/ToggleSwitch";
import HeroSection from "../components/HeroSection";

const Main = () => {
  const [stockData, setStockData] = useState(null);
  return (
    <div className="min-h-screen  text-white pt-7  ">
      <Navbar />
      <div className="container mx-auto px-4 pt-44">
        <SearchBar stockData={sto}/>
        <HeroSection />
      </div>

      <div className="flex justify-center items-center pt-16">
        <ToggleSwitch />
      </div>
    </div>
  );
};

export default Main;
