const axios = require("axios");

async function getNews() {
  try {
    const response = await axios.get("https://finance.yahoo.com", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        Accept: "text/html,application/xhtml+xml",
      },
      maxRedirects: 5, // Reduce redirects
    });

    console.log(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
  }
}

getNews();
