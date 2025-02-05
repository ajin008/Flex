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
  if (!stockData || !stockData.data) {
    return (
      <div className="w-[400px] h-[300px] bg-gradient-to-br from-[#1a2b3c] via-[#2c3e50] to-[#34495e] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center text-white">
        <p>Loading stock data...</p>
      </div>
    );
  }

  const { symbol, currentPrice, change, data, additionalInfo } = stockData;

  const formattedCurrentPrice = currentPrice ? currentPrice.toFixed(2) : "N/A";
  const formattedPreviousClose = additionalInfo?.previousClose
    ? additionalInfo.previousClose.toFixed(2)
    : "N/A";
  const formattedDayHigh = additionalInfo?.dayHigh
    ? additionalInfo.dayHigh.toFixed(2)
    : "N/A";
  const formattedDayLow = additionalInfo?.dayLow
    ? additionalInfo.dayLow.toFixed(2)
    : "N/A";
  const formattedChange = change ? Math.abs(change).toFixed(2) : "0.00";

  // Function to format date to shorter version
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-[1200px] h-[300px] bg-gradient-to-br from-[#1a2b3c] via-[#2c3e50] to-[#34495e] rounded-2xl overflow-hidden shadow-2xl relative">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"></div>

      {/* Stock Info Header - Moved to left side */}
      <div className="absolute top-4 left-8 z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold">{symbol}</h2>
            <div
              className={`flex items-center ${
                change >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {change >= 0 ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
              <span className="ml-1 font-semibold">{formattedChange}%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional Info - Moved to right side */}
      <div className="absolute top-4 right-8 z-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white">
          <div className="flex justify-between w-28">
            <span className="text-white/70">Current:</span>
            <span className="font-medium">₹{formattedCurrentPrice}</span>
          </div>
          <div className="flex justify-between w-28">
            <span className="text-white/70">Previous:</span>
            <span className="font-medium">₹{formattedPreviousClose}</span>
          </div>
          <div className="flex justify-between w-28">
            <span className="text-white/70">High:</span>
            <span className="font-medium">₹{formattedDayHigh}</span>
          </div>
          <div className="flex justify-between w-28">
            <span className="text-white/70">Low:</span>
            <span className="font-medium">₹{formattedDayLow}</span>
          </div>
        </div>
      </div>

      {/* Chart - Centered with adjusted margins */}
      {data && data.length > 0 ? (
        <div className="pt-20 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 50, left: 50, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis
                dataKey="date"
                axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
                tick={{ fill: "white", opacity: 0.7 }}
                tickFormatter={formatDate}
                interval="preserveStartEnd"
              />
              <YAxis
                axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
                tick={{ fill: "white", opacity: 0.7 }}
                width={60}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(26, 43, 60, 0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
                labelStyle={{ color: "white", marginBottom: "4px" }}
                itemStyle={{ color: "#8884d8" }}
                labelFormatter={formatDate}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 6,
                  strokeWidth: 2,
                  stroke: "white",
                  fill: "#8884d8",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <p>No chart data available</p>
        </div>
      )}
    </div>
  );
};

export default StockChart;
