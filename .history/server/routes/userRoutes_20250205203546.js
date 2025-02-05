import express from "express";
const router = express.Router();
import {
  SearchStock,
  getNews,
  searchNews,
} from "../controllers/userController.js";

router.get("/StockSearch", SearchStock);
router.get("/news", getNews);
router.get("/newsSearch", searchNews);
export default router;
