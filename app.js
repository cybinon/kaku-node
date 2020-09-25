const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv/config");
//Middleware

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});
app.get("/posts", (req, res) => {
  res.send("Post are on home  ");
});
//Connect DB
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected DB")
);

//HOW to we start Listening to the Server

app.listen(3000);
