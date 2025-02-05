import React, { useState, useEffect } from "react";
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

const StockChart = ({ symbol }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceChange, setPriceChange] = useState(0);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        // Simulating API call - replace with actual axios call
        const response = await fetch(`http://localhost:12500/user/StockSearch?query=${symbol}`);
        const stockData = await response.json();
        setData(stockData.data);
        
        // Calculate price change
        if (stockData.data.length >= 2) {
          const firstPrice = stockData.data[0].price;
          const lastPrice = stockData.data[stockData.data.length - 1].price;
          setPriceChange(((lastPrice - firstPrice) / firstPrice * 100).toFixed(2));
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data", error);
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol]);

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-[#1a2b3c] via-[#2c3e50] to-[#34495e] rounded-2xl overflow-hidden shadow-2xl">
      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"></div>
      
      {/* Stock Info Header */}
      <div className="absolute top-4 left-4 z-10 text-white">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <h2 className="text-2xl font-bold">{symbol}</h2>
          <div className={`flex items-center ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {priceChange >= 0 ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
            <span className="ml-1">{Math.abs(priceChange)}%</span>
          </div>
        </motion.div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 border-4 border-white/50 rounded-full"
          />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data}
            margin={{ top: 60, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(255,255,255,0.1)" 
            />
            <XAxis 
              dataKey="date" 
              axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              tick={{ fill: 'white', opacity: 0.7 }}
            />
            <YAxis 
              axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              tick={{ fill: 'white', opacity: 0.7 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(26, 43, 60, 0.8)', 
                border: 'none',
                borderRadius: '12px'
              }}
              labelStyle={{ color: 'white' }}
              itemStyle={{ color: '#8884d8' }}
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
                stroke: 'white',
                fill: '#8884d8'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default StockChart;