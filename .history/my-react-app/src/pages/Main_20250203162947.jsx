import React from "react";
import Navbar from "../components/Navbar";

export const Main = () => {
  return (
    <div className="min-h-screen   overflow-hidden">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-2 p">
        <Navbar />
      </div>
    </div>
  );
};
