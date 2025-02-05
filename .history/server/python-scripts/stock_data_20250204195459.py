# stock_data.py

from nsepy import get_history
import sys
import json

def get_stock_data(symbol):
    # Fetch stock data for the given symbol
    stock_data = get_history(symbol=symbol)
    
    # Format the data as JSON for easy use
    formatted_data = stock_data[['Date', 'Open']].reset_index().to_dict(orient='records')
    
    return json.dumps(formatted_data)

if __name__ == "__main__":
    stock_symbol = sys.argv[1]  # Get stock symbol from command line argument
    data = get_stock_data(stock_symbol)
    print(data)
