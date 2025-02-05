import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

const StockChart = ({ stockData }) => {
  const { symbol, currentPrice, change, data, additionalInfo } = stockData;

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-[#1a2b3c] via-[#2c3e50] to-[#34495e] rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"></div>

      {/* Stock Info Header */}
      <div className="absolute top-4 left-4 z-10 text-white flex flex-col gap-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <h2 className="text-2xl font-bold">{symbol}</h2>
          <div
            className={`flex items-center ${
              change >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {change >= 0 ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
            <span className="ml-1">{Math.abs(change).toFixed(2)}%</span>
          </div>
        </motion.div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm opacity-80">
          <div>Current: ₹{currentPrice.toFixed(2)}</div>
          <div>Previous: ₹{additionalInfo.previousClose.toFixed(2)}</div>
          <div>High: ₹{additionalInfo.dayHigh.toFixed(2)}</div>
          <div>Low: ₹{additionalInfo.dayLow.toFixed(2)}</div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 60, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="date"
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tick={{ fill: "white", opacity: 0.7 }}
          />
          <YAxis
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tick={{ fill: "white", opacity: 0.7 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(26, 43, 60, 0.8)",
              border: "none",
              borderRadius: "12px",
            }}
            labelStyle={{ color: "white" }}
            itemStyle={{ color: "#8884d8" }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 8,
              strokeWidth: 2,
              stroke: "white",
              fill: "#8884d8",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
