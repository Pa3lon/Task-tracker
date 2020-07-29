const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  description: String,
  dateTime: Date,
  completed: Boolean,
  icon: String,
  repeat: Boolean,
  dayInterval: Int,
});

module.exports = mongoose.model("Task", Schema, "tasks");
