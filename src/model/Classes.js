const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  classTeacher: {
    type: String,
    required: true,
  },
  studentsList: {
    type: [],
  },
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
