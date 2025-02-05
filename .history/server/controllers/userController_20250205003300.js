import yahooFinance from 'yahoo-finance2';

export const SearchStock = async (req, res) => {
  const stockSymbol = req.query.query;
  if (!stockSymbol) {
    return res.status(400).json({ error: "Stock symbol is required" });
  }

  try {
    // Add .NS suffix for NSE stocks
    const symbol = `${stockSymbol}.NS`;
    
    // Get quote for current price and basic info
    const quote = await yahooFinance.quote(symbol);
    
    // Get historical data for the chart
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);

    const historical = await yahooFinance.historical(symbol, {
      period1: startDate,
      period2: endDate,
      interval: '1d'
    });

    // Format the data for frontend
    const formattedData = historical.map(item => ({
      date: item.date.toISOString().split('T')[0],
      price: item.close,
      open: item.open,
      high: item.high,
      low: item.low,
      volume: item.volume
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
        previousClose: quote.regularMarketPreviousClose
      }
    });

  } catch (error) {
    console.error("Error fetching stock data:", error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
};