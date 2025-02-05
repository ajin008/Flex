import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import AuthRouter from './routes/authRoutes.js'
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

connectDB()

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/public', express.static('public'));

app.use('/auth',AuthRouter)
app.use('/user')

export default app; 
