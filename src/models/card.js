const mongoose = require("mongoose");

const card = mongoose.Schema({
  cardName:String,
  arrCard: [
    {
      icon: String,
      title: String,
      description: String,
      linktext: String,
      link: String,
    },
  ],
});
// const card = mongoose.Schema({
//   arr: [{ icon: String, title: String,description:String,linktext:String,link:String }],
// });

module.exports = mongoose.model("cards", card);
