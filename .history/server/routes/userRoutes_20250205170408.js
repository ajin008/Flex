import express from "express";
const router = express.Router();
import { SearchStock } from "../controllers/userController.js";


router.get('/StockSearch',SearchStock)
router.get('/news')

export default router;
