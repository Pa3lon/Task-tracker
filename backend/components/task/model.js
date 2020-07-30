const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: String,
  description: String,
  dateTime: Date,
  completed: Boolean,
  icon: String,
  repeat: Boolean,
  dayInterval: Number,
});

module.exports = mongoose.model("Task", Schema, "tasks");
