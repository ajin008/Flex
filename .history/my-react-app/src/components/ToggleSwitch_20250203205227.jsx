import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <div
        className={`relative inline-block w-10 h-5 rounded-full transition-colors duration-300 ${
          isOn ? "bg-blue-500" : "bg-gray-400"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
      <div class="flex justify-between items-center bg-gray-700 rounded-full px-1 py-1">
        <button class=``>
          Swing Trade
        </button>
        <button class="text-gray-400 hover:text-white rounded-full px-4 py-2">
          Intraday
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
