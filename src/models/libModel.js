const mongoose = require("mongoose");

//define book database schema using mongoose
const libSchema = mongoose.Schema({
  media: {
    type: Array,
    required: true,
  },
});

//create vari to hold user schema
const Lib = mongoose.model("Lib", libSchema);

module.exports = Lib;
