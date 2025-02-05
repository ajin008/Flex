import axios from "axios";
import cheerio from "cheerio";

class NewsService {
  constructor() {
    this.newsCache = [];
    this.lastFetchTime = null;
    this.CACHE_DURATION = 15 * 60 * 1000; // 15 minutes
  }

  isCacheValid() {
    return (
      this.newsCache.length > 0 &&
      this.lastFetchTime &&
      Date.now() - this.lastFetchTime < this.CACHE_DURATION
    );
  }

  async getNews() {
    if (this.isCacheValid()) {
      console.log("Returning cached news");
      return this.newsCache;
    }

    console.log("Fetching fresh news");
    try {
      const news = await this.scrapeMoneyControl();
      this.newsCache = news;
      this.lastFetchTime = Date.now();
      return news;
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  }

  async scrapeMoneyControl() {
    try {
      const response = await axios.get(
        "https://www.moneycontrol.com/news/business/markets/",
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        }
      );

      const $ = cheerio.load(response.data);
      const news = [];

      $(".linklisting li").each((index, element) => {
        const titleElement = $(element).find("a");
        const title = titleElement.text().trim();
        const url = titleElement.attr("href");
        const timestamp = $(element).find(".nws_datetx").text().trim();

        if (title && url) {
          news.push({
            id: `mc-${index}`,
            title,
            url,
            source: "MoneyControl",
            timestamp: timestamp || new Date().toLocaleString(),
          });
        }
      });

      return news;
    } catch (error) {
      console.error("Error scraping MoneyControl:", error);
      return [];
    }
  }

  searchNews(query) {
    if (!query) return this.newsCache;

    const searchTerm = query.toLowerCase();
    return this.newsCache.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
  }
}

// Export as ES module
export default new NewsService();
