require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const api = require("./");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use("/", api);

mongoose.connect(
  `mongodb+srv://${process.env.DB_ACCOUNT_NAME}:${process.env.DB_ACCOUNT_PASSWORD}@cluster0.btdxy.mongodb.net/Task-tracker?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.on("open", () => {
  console.log("Connected to db");
});

app.listen(3000, (req, res) => {
  console.log("Server starting");
});
