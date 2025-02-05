import express from "express";
const router = express.Router();
import { googleAuthValidation } from "../controllers/AuthController.js";

const client = 

router.post('/googleAuth',googleAuthValidation)

export default router;
