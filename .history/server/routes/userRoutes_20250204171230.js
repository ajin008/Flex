import express from "express";
const router = express.Router();
import { SearchStock } from "../controllers/userController";


router.get('/StockSearch',SearchStock)

export default router;
