import yahooFinance from "yahoo-finance2";
imp

export const SearchStock = async (req, res) => {
  let stockSymbol = req.query.query;
  if (!stockSymbol) {
    return res.status(400).json({ error: "Stock symbol is required" });
  }

  try {
    // Map common Indian indices to their Yahoo Finance symbols
    const indexMap = {
      "NIFTY 50": "^NSEI",
      SENSEX: "^BSESN",
      "NIFTY BANK": "^NSEBANK",
      "NIFTY IT": "^CNXIT",
      // Add more indices as needed
    };

    // Check if the input is an index
    const yahooSymbol =
      indexMap[stockSymbol.toUpperCase()] || `${stockSymbol}.NS`;

    // Get quote for current price and basic info
    const quote = await yahooFinance.quote(yahooSymbol);

    // Get historical data for the chart
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);

    const historical = await yahooFinance.chart(yahooSymbol, {
      period1: startDate,
      period2: endDate,
      interval: "1d",
    });

    // Format the data for frontend
    const formattedData = historical.quotes.map((item) => ({
      date: new Date(item.date).toISOString().split("T")[0],
      price: item.close,
      open: item.open,
      high: item.high,
      low: item.low,
      volume: item.volume,
    }));

    res.json({
      symbol: stockSymbol,
      currentPrice: quote.regularMarketPrice,
      change: quote.regularMarketChangePercent,
      data: formattedData,
      additionalInfo: {
        dayHigh: quote.regularMarketDayHigh,
        dayLow: quote.regularMarketDayLow,
        volume: quote.regularMarketVolume,
        previousClose: quote.regularMarketPreviousClose,
      },
    });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    res.status(500).json({
      error:
        "Failed to fetch stock data. Please check if the symbol is correct.",
    });
  }
};

export const getNews = async () => {
  try {
    const news = await newsService.getNews();
    res.json(news);
  } catch (error) {
    console.error("Error in /news route:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};
