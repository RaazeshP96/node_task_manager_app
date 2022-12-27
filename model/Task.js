const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [50, "Max length for word is 50"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
