import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

export const SearchStock = async (req, res) => {
  console.log("searchStock is triggering", req.query);
  const stockSymbol = req.query.query;
  console.log("this is my api key:", ALPHA_VANTAGE_API_KEY);

  if (!stockSymbol) {
    return res.status(400).json({ error: "Stock symbol is required" });
  }

  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: ", // Use "TIME_SERIES_DAILY" for daily data
        symbol: stockSymbol,
        interval: "5min", // You can change this to "1min", "15min", etc.
        apikey: ALPHA_VANTAGE_API_KEY,
      },
    });

    const stockData = response.data["Time Series (5min)"];
    console.log(response.data);

    if (!stockData) {
      return res.status(404).json({ error: "Stock data not found" });
    }

    // Convert stock data into a usable format
    const formattedData = Object.entries(stockData).map(([time, values]) => ({
      time, // Timestamp
      price: parseFloat(values["1. open"]), // Opening price
    }));

    res.json({ symbol: stockSymbol, data: formattedData });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
