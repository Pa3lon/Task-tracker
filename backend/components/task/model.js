const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: String,
  description: String,
  dateTime: Date,
  completed: Boolean,
  icon: String,
});

module.exports = mongoose.model("Task", Schema, "tasks");
