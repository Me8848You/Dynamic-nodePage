const mongoose = require("mongoose");

const schDetails = mongoose.Schema({
  brandLogo: String,
  brandName: String,
  link: [
    {
      links: String,
      url: String,
    },
  ],
  searchName: String,
  placeholder: String,
});

module.exports = mongoose.model("Details", schDetails); //first argu collection ko name and 2nd schema name
