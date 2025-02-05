import express from "express";
const router = express.Router();
import {
  SearchStock,
  getNews,
  searchNews,
} from "../controllers/userController.js";

router.get("/StockSearch", SearchStock);
router.get("/news", getNews); // Ensure this matches the `/news` endpoint
router.get("/newsSearch", searchNews);
export default router;
