import express from "express";
const router = express.Router();
import { googleAuthValidation } from "../controllers/AuthController.js";
import { GoogleAuth } from "google-auth-library";

const client = GoogleAuth

router.post('/googleAuth',googleAuthValidation)

export default router;
