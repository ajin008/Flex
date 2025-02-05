import React, { useState } from "react";
import { Info } from "lucide-react";

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclaimer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Disclaimer Icon with Enhanced Animation */}
      <div
        className="fixed bottom-6 right-6 cursor-pointer group"
        onClick={toggleDisclaimer}
      >
        <div className="relative">
          {/* Ripple effect background */}
          <div className="absolute inset-0 animate-ping rounded-full bg-purple-400 opacity-20" />

          {/* Rotating outer ring */}
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-purple-400 border-t-transparent" />

          {/* Icon with hover and pulse effects */}
          <Info className="w-8 h-8 text-purple-400 relative z-10 transform transition-all duration-300 animate-pulse-subtle group-hover:scale-110 group-hover:text-purple-300" />
        </div>
      </div>

      {/* Disclaimer Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-md mx-4 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-4">Disclaimer</h2>
            <p className="text-sm text-gray-300">
              The information provided on this platform is for educational and
              informational purposes only. It should not be considered financial
              or investment advice. Always conduct your own research and consult
              with a qualified financial advisor before making any investment
              decisions.
            </p>
            <button
              onClick={toggleDisclaimer}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Disclaimer;
