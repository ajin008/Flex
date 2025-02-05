import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

export const SearchStock = async (req, res) => {
  const stockSymbol = req.query.query;
  if (!stockSymbol) {
    return res.status(400).json({ error: "Stock symbol is required" });
  }

  try {
    const response = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: stockSymbol,
        apikey: ALPHA_VANTAGE_API_KEY,
      },
    });

    const stockData = response.data["Time Series (Daily)"];
    if (!stockData) {
      return res.status(404).json({ error: "Stock data not found" });
    }

    const formattedData = Object.entries(stockData).map(([date, values]) => ({
      date,
      price: parseFloat(values["1. open"]), // Using open price for simplicity
    }));

    res.json({ symbol: stockSymbol, data: formattedData });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
