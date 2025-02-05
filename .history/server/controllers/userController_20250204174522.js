import axios from "axios";
const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

export const SearchStock = async (req, res) => {
  console.log("searchStock is triggering", req.query);
  const stockSymbol = req.query.query;

  if (!stockSymbol) {
    return res.status(400).json({ error: "Stock symbol is required" });
  }
};
