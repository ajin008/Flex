import express from "express";
const router = express.Router();
import { googleAuthValidation } from "../controllers/AuthController.js";

const client = goo

router.post('/googleAuth',googleAuthValidation)

export default router;
