import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StockChart = ({ stockData }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-center text-white text-xl font-bold">
        Stock Price Chart
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={stockData}>
          <XAxis dataKey="time" tick={{ fill: "#fff" }} />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
