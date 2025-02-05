module.exports = {
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-subtle": "pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
};
