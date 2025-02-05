import express from "express";
const router = express.Router();
import { SearchStock,getNews, } from "../controllers/userController.js";


router.get('/StockSearch',SearchStock)
router.get('/news',getNews)
router.get('/news/search',searchNews)

export default router;
