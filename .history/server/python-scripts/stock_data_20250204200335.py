# stock_data.py

from nsepy import get_history
from datetime import datetime

def get_stock_data(symbol):
    # Get today's date as end date
    end_date = datetime.today()

    # Set the start date to one year ago
    start_date = datetime(end_date.year - 1, end_date.month, end_date.day)

    # Fetch stock data
    stock_data = get_history(symbol=symbol, start=start_date, end=end_date)
    
    return stock_data

# Get stock symbol from command line argument
if __name__ == "__main__":
    import sys
    stock_symbol = sys.argv[1]
    data = get_stock_data(stock_symbol)
    print(data)
