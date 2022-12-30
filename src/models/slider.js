const mongoose = require("mongoose");

const slider = mongoose.Schema({
  arr: [{ title: String, subtitle: String, imgurl: String }],
});

module.exports = mongoose.model("details", slider); // 1st collection name, 2nd schema name
