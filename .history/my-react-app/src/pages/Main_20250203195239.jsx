import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Main = () => {
  return (
    <div className="min-h-screen  text-white pt-7 bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 bg-gradient-to-r from-slate-900 to-slate-700">
      <Navbar />
      <div className="container mx-auto px-4 pt-8">
        <SearchBar />
      </div>
    </div>
  );
};

export default Main;
