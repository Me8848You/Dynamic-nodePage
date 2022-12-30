const mongoose = require("mongoose");

const banner = mongoose.Schema({
  bnr: [
    {
      title: String,
      description: String,
      button: String,
      buttonLink: String,
      Image: String,
    },
  ],
});

module.exports = mongoose.model("banner",banner);
