/* Importing the Mongoose library into the current JavaScript file.  */
const mongoose = require("mongoose");

/* The code is defining a Mongoose schema for a student object. The schema specifies the structure and
properties of a student document in a MongoDB collection. */
const StudentSchema = new mongoose.Schema({
  StudentId: {
    type: Number,
    unique: true,
    required: true,
  },
  StudentName: {
    type: String,
    required: true,
  },
  CollegeName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
