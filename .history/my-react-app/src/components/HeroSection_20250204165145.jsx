import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const mainText = "Flex AI: Predicting Tomorrow's Stocks, Today!".split(" ");
  const subText =
    "Unlock Your Financial Future with Flex AI: Where Smart Predictions Meet Profitable Investments!".split(
      " "
    );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.2,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden py-12">
      {/* Animated circles in background */}
      <motion.div
        className="absolute top-10 left-20 w-32 h-32 rounded-full bg-purple-500/20 -z-10"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-500/20 -z-10"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-500/10 -z-10"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      />

      {/* Main text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-8"
      >
        <motion.h1 className="flex flex-wrap justify-center gap-x-2 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {mainText.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="flex flex-wrap justify-center gap-x-2 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          {subText.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
