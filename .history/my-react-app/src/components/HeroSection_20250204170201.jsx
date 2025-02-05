import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const mainText = "Flex AI: Predicting Tomorrow's Stocks, Today!".split(" ");
  const subText =
    "Unlock Your Financial Future with Flex AI: Where Smart Predictions Meet Profitable Investments!".split(
      " "
    );

  // Enhanced container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Enhanced word animation
  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Enhanced circle animations
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.2, 1],
      opacity: [0, 0.3, 0.2],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden py-12">
      {/* Animated floating circles */}
      <motion.div
        className="absolute top-10 left-20 w-32 h-32 rounded-full bg-purple-400/20 blur-sm -z-10"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        whileInView={{
          y: [0, -20, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-pink-600/20 blur-sm -z-10"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        whileInView={{
          y: [0, 20, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-600/10 blur-md -z-10"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        whileInView={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Text content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-8"
      >
        <motion.h1 className="flex flex-wrap justify-center gap-x-2 text-4xl md:text-5xl font-bold">
          {mainText.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="flex flex-wrap justify-center gap-x-2 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          {subText.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
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
