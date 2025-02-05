import React, { useState } from "react";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclaimer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Disclaimer Icon with Blinking Animation */}
      <motion.div
        className="fixed bottom-6 right-6 cursor-pointer"
        animate={{
          opacity: [1, 0.4, 1],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={toggleDisclaimer}
      >
        <Info className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors" />
      </motion.div>

      {/* Disclaimer Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-md mx-4 border border-white/20"
          >
            <h2 className="text-xl font-bold text-white mb-4">Disclaimer</h2>
            <p className="text-sm text-gray-300">
              Market Risk Notice: Investing in equities and financial markets
              carries inherent risks, including the potential loss of capital.
              Flex is an AI-powered platform that provides entry and exit
              suggestions based on machine learning models trained on historical
              data, primarily focusing on price action trading strategies.
              However, past performance does not guarantee future results, and
              market conditions may change unpredictably. No Financial Advice:
              The information, predictions, or signals provided by Flex are for
              educational and informational purposes only. We do not provide
              personalized financial, investment, or trading advice. Users
              should conduct their own research and consult with a qualified
              financial advisor before making any investment decisions. No SEBI
              Registration: Flex and its creators are not registered with the
              Securities and Exchange Board of India (SEBI) or any other
              financial regulatory authority. We do not endorse, recommend, or
              guarantee the accuracy of any stock predictions or trading
              strategies provided by the platform. No Liability: Users
              acknowledge that trading involves significant financial risks.
              Flex, its developers, and affiliates are not responsible for any
              financial losses incurred while using the platform. Users assume
              full responsibility for their trading decisions. Beware of
              Fraudulent Tips: We strongly advise users to be cautious of
              unsolicited stock tips, investment advice, or trading calls
              received through WhatsApp, Telegram, SMS, phone calls, or other
              communication channels. Always verify information from reliable
              financial sources. By using Flex, you agree to the terms of this
              disclaimer and accept full responsibility for any investment or
              trading actions taken based on the information provided by the
              platform
            </p>
            <button
              onClick={toggleDisclaimer}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Disclaimer;
