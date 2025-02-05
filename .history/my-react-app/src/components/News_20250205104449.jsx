import React, { useState, useEffect } from "react";
import axios from "axios";
import { ExternalLink } from "lucide-react"; // Import an icon for external links

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("Fetching news...");
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${
            import.meta.env.VITE_ALPHA_VANTAGE_API_KEY
          }`
        );
        console.log("API Response:", response.data);
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
    return (
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-white mb-4">Financial News</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="p-4 bg-zinc-800/50 rounded-lg shadow animate-pulse"
            >
              <div className="h-6 bg-zinc-700/50 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-zinc-700/50 rounded w-full mb-2"></div>
              <div className="h-4 bg-zinc-700/50 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );

  if (error)
    return (
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-white mb-4">Financial News</h2>
        <div className="text-red-500 text-center">{error}</div>
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-[#1a1c2b] via-[#2a2d40] to-[#1a1c2b] min-h-screen py-8">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Financial News
        </h2>
        <div className="space-y-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xl font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                {item.title}
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
              <p className="text-sm text-gray-300 mt-3">{item.summary}</p>
              <div className="flex items-center text-xs text-gray-400 mt-3">
                <span className="mr-2">Source: {item.source}</span>
                <span>•</span>
                <span className="ml-2">
                  Published: {new Date(item.time_published).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
