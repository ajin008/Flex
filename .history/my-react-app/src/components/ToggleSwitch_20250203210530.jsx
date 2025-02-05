import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isSwingTrade, setIsSwingTrade] = useState(true);

  const handleToggle = () => {
    setIsSwingTrade(!isSwingTrade);
  };

  return (
    <div className="flex items-center w-full justify-center">
      <div className="relative flex items-center bg-[#212227] rounded-full w-36 h-6">
        <div
          className={`absolute w-1/2 h-full bg-btn2 rounded-full transition-transform duration-300 ${
            isSwingTrade ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <button
          onClick={() => handleToggle()}
          className={`z-10 w-1/2 text-xs font-medium py-1 text-center rounded-full transition-colors ${
            isSwingTrade ? "text-white" : "text-secondary"
          }`}
        >
          Swing
        </button>
        <button
          onClick={() => handleToggle()}
          className={`z-10 w-1/2 text-xs font-medium py-1 text-center rounded-full transition-colors ${
            !isSwingTrade ? "text-white" : "text-secondary"
          }`}
        >
          Intraday
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
