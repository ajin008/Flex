import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Main = () => {
  return (
    <div className="min-h-screen  text-white pt-7 bg-gradient-to-br from-black to-gray-900 ">
      <Navbar />
      <div className="container mx-auto px-4 pt-8">
        <SearchBar />
      </div>
    </div>
  );
};

export default Main;
