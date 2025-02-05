import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news from the backend
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:12500/api/user/news");
        setNews(response.data);
        setFilteredNews(response.data); // Initially display all news
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to fetch news.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredNews(news); // Reset to all news if the query is empty
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:12500/api/user/newsearch?query=${searchQuery}`
      );
      setFilteredNews(response.data);
    } catch (err) {
      console.error("Error searching news:", err);
      setError("Failed to search news.");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-white mb-4">Market News</h2>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded-lg border border-gray-500 bg-gray-900 text-white w-full"
        />
      </form>

      {/* News List */}
      <div className="space-y-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((article) => (
            <div
              key={article.id}
              className="p-6 bg-gray-800 rounded-lg shadow-md"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-purple-400 hover:text-purple-300"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-400 mt-2">
                Source: {article.source} • Published: {article.timestamp}
              </p>
            </div>
          ))
        ) : (
          <div className="text-gray-400">No news found.</div>
        )}
      </div>
    </div>
  );
};

export default News;
