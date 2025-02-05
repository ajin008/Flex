import express from "express";
const router = express.Router();


router.post('/StockSearch',googleAuthValidation)

export default router;
