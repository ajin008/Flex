import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Search";

export const Main = () => {
  return (
    <div className="min-h-screen   overflow-hidden">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-2 pt-7">
        <Navbar />
      </div> 
      <div>
        <SearchBar />
      </div>
    </div>
  );
};
