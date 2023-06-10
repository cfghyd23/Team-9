const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const env = require("dotenv");

require("dotenv").config();

const app = express(); // create express server
const port = process.env.PORT || 5000; // port server is running on

app.use(cors()); // cors middleware
app.use(express.json()); // body parser middleware

const uri = process.env.ATLAS_URI; // database uri
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // connect to database
const connection = mongoose.connection; // get connection
connection.once("open", () => {
  // once connection is open
  console.log("MongoDB database connection established successfully"); // log success
});

//routes
app.use("/api", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to bloodwarriors</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
