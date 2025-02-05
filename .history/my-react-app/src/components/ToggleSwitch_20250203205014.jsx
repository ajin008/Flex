import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">Off</span>
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
      <span className="ml-2">On</span>
    </div>
  );
};

export default ToggleSwitch;
