import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isSwingTrade, setIsSwingTrade] = useState(true);

  const handleToggle = () => {
    setIsSwingTrade(!isSwingTrade);
  };

  return (
    <div className="flex items-center">
      <div className="relative flex items-center bg-gray-200 rounded-full w-48 h-8">
        <div
          className={`absolute w-1/2 h-full bg-blue-500 rounded-full transition-transform duration-300 ${
            isSwingTrade ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <button
          onClick={() => handleToggle()}
          className={`z-10 w-1/2 text-sm font-medium py-2 text-center rounded-full transition-colors ${
            isSwingTrade ? "text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Swing Trade
        </button>
        <button
          onClick={() => handleToggle()}
          className={`z-10 w-1/2 text-sm font-medium py-2 text-center rounded-full transition-colors ${
            !isSwingTrade ? "text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Intraday
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
