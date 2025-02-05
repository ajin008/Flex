import React from "react";
import Navbar from "../components/Navbar";

export const Main = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 via-black to-black overflow-hidden">
        <div className="px-2 sm:px-4 md:px-6 lg:px-8"></div>
      <Navbar />
    </div>
  );
};
