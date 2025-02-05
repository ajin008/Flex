import express from "express";
const router = express.Router();
import { googleAuthValidation } from "../controllers/AuthController";

router.post('/googleAuth',googleAuthValidation)

export default router;
