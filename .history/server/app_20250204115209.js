import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import AuthRouter from './routes/authRoutes.js'

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));

app.use('/auth',AuthRouter)

export default app; 
