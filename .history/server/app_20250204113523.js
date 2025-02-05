const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); // Enable CORS
app.use(morgan("dev")); // Log HTTP requests

// Static Files (If needed)
app.use(express.static("public"));

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

module.exports = app; // Export app
