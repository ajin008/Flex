# stock_data.py
from nsepy import get_history
from datetime import datetime
import sys
import json
import pandas as pd

def get_stock_data(symbol):
    # Get today's date as end date
    end_date = datetime.today()

    # Set the start date to one year ago
    start_date = datetime(end_date.year - 1, end_date.month, end_date.day)

    # Fetch stock data
    try:
        stock_data = get_history(symbol=symbol, start=start_date, end=end_date)
        
        # Convert DataFrame to list of dictionaries
        stock_list = stock_data.reset_index().to_dict('records')
        
        # Format the data to match your frontend expectations
        formatted_data = [
            {
                'date': row['Date'].strftime('%Y-%m-%d'),
                'price': row['Close']
            } for row in stock_list
        ]
        
        print(json.dumps(formatted_data))
    except Exception as e:
        print(json.dumps({'error': str(e)}))

# Get stock symbol from command line argument
if __name__ == "__main__":
    # Join all arguments after the script name to handle multi-word symbols
    stock_symbol = ' '.join(sys.argv[1:])
    get_stock_data(stock_symbol)