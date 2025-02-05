import express from "express";
const router = express.Router();
import { SearchStock } from "../controllers/userController";


router.post('/StockSearch',SearchStock)

export default router;
