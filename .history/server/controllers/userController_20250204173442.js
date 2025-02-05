dotenv.config();

export const SearchStock = async (req, res) => {
  console.log("searchStock is triggering", req.query);
  const stockQuery = req.query.query;
};
