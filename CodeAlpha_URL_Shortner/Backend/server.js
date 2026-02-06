require("dotenv").config();   // load .env

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// connect to MongoDB
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/", require("./routes/urlRoutes"));

// PORT 
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});