const mongoose = require("mongoose");

const referenceList = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model("Reference", referenceList);