import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ToggleSwitch from "../components/ToggleSwitch";
import HeroSection from "../components/HeroSection";
import StockChart from "../components/StockChart";
import News from "../components/News";
import Disclaimer from "../components/Disclaimer";
import { ToastContainer } from "react-fox-toast";

const Main = () => {
  const [stockData, setStockData] = useState(null);
  const [activePage, setActivePage] = useState("Home"); // Track active page

  return (
    <div className="min-h-screen text-white pt-7">
      <ToastContainer />
      <Navbar setActivePage={setActivePage} activePage={activePage} />
      <div className="container mx-auto px-4 pt-44">
        {activePage === "index" && (
          <>
            <SearchBar setStockData={setStockData} />
            {!stockData && <HeroSection />}
          </>
        )}
        {activePage === "news" && <News />}
      </div>

      {activePage === "index" && stockData && (
        <>
          <div className="flex justify-center pt-10">
            <StockChart stockData={stockData} />
          </div>
          <div className="flex justify-center items-center pt-16">
            <ToggleSwitch />
          </div>
        </>
      )}
      <Disclaimer />
    </div>
  );
};

export default Main;
