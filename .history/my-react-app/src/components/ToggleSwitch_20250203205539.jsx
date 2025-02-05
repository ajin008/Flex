import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <
      </div>
      <div className="flex justify-between items-center bg-gray-700 rounded-full px-1 py-1">
        <button
          className={`bg-blue-500 text-white rounded-full px-4 py-2${
            isOn ? "bg-blue-500" : "bg-gray-400"
          }`}
        >
          Swing Trade
        </button>
        <button
          className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        >
          Intraday
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
