const express = require("express");
const Details = require("../models/details");
const Slider = require("../models/slider");
const card=require('../models/card');


const router = express.Router(); //router ko object banako

router.get("", async (req, res) => {
  const details = await Details.findOne({
    _id: "63a9b386c06448048de6e099",
  });

  const slider=await Slider.findOne({
    _id:'63ac6057cad041dc2394bad0'
  })
 
  // console.warn(slider.arr)
  const Card=await card.find()
  console.log(Card.arrCard);

  res.render("index", {
    dettt: details,
    sliderDet:slider,
    card:Card
  });
});


router.get("/gallery", async (req, res) => {
  const details = await Details.findOne({
    _id: "63a9b386c06448048de6e099",
  });
  res.render("gallery", { dattt: details });
});

router.get("/about", (req, res) => {
  res.send("This message is from router About page:)");
});

router.get("*", (req, res) => {
  res.render("nopage");
});

module.exports = router; //router vanne object nai export gareko xa yeha
