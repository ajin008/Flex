import axios from "axios";
import * as cheerio from "cheerio";

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
      const news = await this.scrapeYahooFinance();
      this.newsCache = news.slice(0, 10); // Limit to 10 news articles
      this.lastFetchTime = Date.now();
      return this.newsCache;
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  }

  async scrapeYahooFinance() {
    try {
      const response = await axios.get("https://finance.yahoo.com", {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      });

      const $ = cheerio.load(response.data);
      const news = [];

      $("li.js-stream-content").each((index, element) => {
        if (index >= 10) return false; // Stop after 10 news items

        const titleElement = $(element).find("h3 a");
        const title = titleElement.text().trim();
        const url = titleElement.attr("href");

        if (title && url) {
          news.push({
            id: `yf-${index}`,
            title,
            url: `https://finance.yahoo.com${url}`,
            source: "Yahoo Finance",
            timestamp: new Date().toLocaleString(),
          });
        }
      });

      console.log("Fetched News:", news);
      return news;
    } catch (error) {
      console.error("Error scraping Yahoo Finance:", error);
      return [];
    }
  }
}

export default new NewsService();
