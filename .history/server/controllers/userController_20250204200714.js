import { exec } from "child_process";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export const SearchStock = async (req, res) => {
  const stockSymbol = req.query.query;
  if (!stockSymbol) {
    return res.status(400).json({ error: "Stock symbol is required" });
  }

  try {
    // Define the path to the Python script
    const scriptPath = path.join(__dirname, "stock_data.py");

    // Use double quotes to handle spaces in the symbol
    exec(`python3 "${scriptPath}" ${stockSymbol}`, (error, stdout, stderr) => {
      if (error) {
        console.error("Execution error:", error);
        return res.status(500).json({ error: `Error: ${error.message}` });
      }
      if (stderr) {
        console.error("stderr:", stderr);
        return res.status(500).json({ error: `stderr: ${stderr}` });
      }

      try {
        // Parse the JSON output from the Python script
        const stockData = JSON.parse(stdout);
        res.json({ symbol: stockSymbol, data: stockData });
      } catch (parseError) {
        console.error("Parse error:", parseError);
        console.error("Raw stdout:", stdout);
        res.status(500).json({ error: "Failed to parse stock data" });
      }
    });
  } catch (error) {
    console.error("Catch error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
