const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors()); 
app.use(morgan("dev")); 


app.use(express.static("public"));

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

module.exports = app; // Export app
