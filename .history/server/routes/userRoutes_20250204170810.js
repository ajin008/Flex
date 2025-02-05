import express from "express";
const router = express.Router();


router.post('/googleAuth',googleAuthValidation)

export default router;
