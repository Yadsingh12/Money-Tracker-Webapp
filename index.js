const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("successfully connected");
}).listen(5000);

console.log("listening on port 5000")