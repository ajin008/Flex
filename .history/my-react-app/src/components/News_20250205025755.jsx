import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${import.meta.env.VITE_ALPHA_VANTAGE_API_KEY}`
        );
        setNews(response.data.feed || []);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Unable to fetch news at the moment.");
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading)
    return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-white mb-4">Financial News</h2>
      <div className="space-y-4">
        {news.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-zinc-800 rounded-lg shadow hover:bg-zinc-700 transition-colors"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-purple-400 hover:underline"
            >
              {item.title}
            </a>
            <p className="text-sm text-gray-400 mt-2">{item.summary}</p>
            <p className="text-xs text-gray-500 mt-1">
              Source: {item.source} | Published:{" "}
              {new Date(item.time_published).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
