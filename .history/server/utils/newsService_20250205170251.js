const axios = require('axios');
const cheerio = require('cheerio');

class NewsService {
    constructor() {
        // Store news in memory
        this.newsCache = [];
        // Track when we last fetched news
        this.lastFetchTime = null;
        // Cache duration - 15 minutes
        this.CACHE_DURATION = 15 * 60 * 1000;
    }

    // Check if cache is still valid
    isCacheValid() {
        return (
            this.newsCache.length > 0 &&
            this.lastFetchTime &&
            Date.now() - this.lastFetchTime < this.CACHE_DURATION
        );
    }

    // Main function to get news
    async getNews() {
        // Return cached news if still valid
        if (this.isCacheValid()) {
            console.log('Returning cached news');
            return this.newsCache;
        }

        // If cache invalid, fetch new data
        console.log('Fetching fresh news');
        try {
            const news = await this.scrapeMoneyControl();
            this.newsCache = news;
            this.lastFetchTime = Date.now();
            return news;
        } catch (error) {
            console.error('Error fetching news:', error);
            throw error;
        }
    }

    // Function to scrape MoneyControl
    async scrapeMoneyControl() {
        try {
            // Fetch the webpage
            const response = await axios.get('https://www.moneycontrol.com/news/business/markets/', {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });

            // Load the HTML into cheerio
            const $ = cheerio.load(response.data);
            const news = [];

            // Find and process each news item
            $('.linklisting li').each((index, element) => {
                const titleElement = $(element).find('a');
                const title = titleElement.text().trim();
                const url = titleElement.attr('href');
                const timestamp = $(element).find('.nws_datetx').text().trim();

                if (title && url) {
                    news.push({
                        id: `mc-${index}`,
                        title,
                        url,
                        source: 'MoneyControl',
                        timestamp: timestamp || new Date().toLocaleString()
                    });
                }
            });

            return news;
        } catch (error) {
            console.error('Error scraping MoneyControl:', error);
            return [];
        }
    }

    // Function to search news
    searchNews(query) {
        if (!query) return this.newsCache;
        
        const searchTerm = query.toLowerCase();
        return this.newsCache.filter(article => 
            article.title.toLowerCase().includes(searchTerm)
        );
    }
}

module.exports = new NewsService();