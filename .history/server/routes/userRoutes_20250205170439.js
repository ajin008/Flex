import express from "express";
const router = express.Router();
import { SearchStock } from "../controllers/userController.js";


router.get('/StockSearch',SearchStock)
router.get('/news',getNews)
router.get('')

export default router;
