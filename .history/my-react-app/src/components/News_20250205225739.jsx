import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch news from the backend
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:12500/user/news");
        setNews(response.data);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to fetch news.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-white mb-4">Market News</h2>

      {/* News List */}
      <div className="space-y-6">
        {news.length > 0 ? (
          news.map((article) => (
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