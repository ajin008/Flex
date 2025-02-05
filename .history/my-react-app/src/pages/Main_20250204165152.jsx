import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ToggleSwitch from "../components/ToggleSwitch";

const Main = () => {
  return (
    <div className="min-h-screen  text-white pt-7  ">
      <Navbar />
      <div className="container mx-auto px-4 pt-8">
        <SearchBar />
      </div>
      <div className="flex justify-center items-center pt-16">
        <ToggleSwitch />
      </div>
      div
    </div>
  );
};

export default Main;
