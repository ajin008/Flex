import React from "react";

export const getStartedBtn = () => {
  return (
    <div className="hidden md:flex space-x-2">
      <button className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full hover:bg-purple-700 transition-colors">
        Login
      </button>
      <button className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full hover:bg-purple-700 transition-colors">
        Sign in
      </button>
    </div>
  );
};
