import express from "express";
const router = express.Router();
import { googleAuthValidation } from "../controllers/AuthController";

router.post('/googleAuth',googleAuth)

export default router;
