import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search, Loader, ExternalLink } from "lucide-react";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) return (
    <div className="flex items-center justify-center h-64">
      <div className="text-red-500 bg-red-500/10 px-4 py-2 rounded-lg">{error}</div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="max-w-xl mx-auto mb-8">
        <div className="flex items-center bg-[#212227] rounded-full overflow-hidden shadow-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 text-white bg-transparent outline-none"
            placeholder="Search news..."
          />
          <div className="px-4 py-2">
            <Search className="text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <Loader className="animate-spin text-purple-500" size={32} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item, index) => (
            <div
              key={index}
              className="bg-[#212227] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="text-xs font-medium text-purple-400 mb-2">
                    {item.source}
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(item.time_published).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm group-hover:text-purple-400 transition-colors">
                      Read more <ExternalLink size={14} className="ml-1" />
                    </div>
                  </a>
                </div>
                <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && filteredNews.length === 0 && (
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-400">No news articles found</div>
        </div>
      )}
    </div>
  );
};

export default News;