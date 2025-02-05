import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export const Main = () => {
  return (
    <div className="min-h-screen   overflow-hidden">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-2 pt-7">
        <Navbar />
      </div>
      <div className="pt-15 bg-[1D1D1D]">
        <SearchBar />
      </div>
    </div>
  );
};
