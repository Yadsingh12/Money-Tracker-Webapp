const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended : true
}));

app.get("/", (req, res) => {
  res.send("successfully connected");
}).listen(5000);

console.log("listening on port 5000")