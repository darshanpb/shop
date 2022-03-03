const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

// database init
mongoose
  .connect('mongodb://localhost:27017', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to database...");
  })
  .catch(() => {
    console.log("failed while connecting to database");
  });

// Routes
const userRoutes = require("./routes");

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);

// PORT
const port = process.env.PORT || 5000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});