import React, { useState } from "react";
import { Info } from "lucide-react"; // Import an icon for the disclaimer

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclaimer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Disclaimer Icon with Blinking Animation */}
      <div
        className="fixed bottom-6 right-6 cursor-pointer animate-blink"
        onClick={toggleDisclaimer}
      >
        <Info className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors" />
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