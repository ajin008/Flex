import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));

// Import routes (if needed in the future)
// import userRoutes from "./routes/userRoutes.js";
// app.use("/users", userRoutes);

export default app; 
