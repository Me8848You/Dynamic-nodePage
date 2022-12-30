const express = require("express");
const Details = require("../models/details");
const Slider = require("../models/slider");
const card=require('../models/card');
const contact=require('../models/contact');
const banner=require('../models/banner1');
const about=require('../models/about');


const router = express.Router(); //router ko object banako

router.get("", async (req, res) => {
  const details = await Details.findOne({
    _id: "63a9b386c06448048de6e099",
  });

  const slider=await Slider.findOne({
    _id:'63ac6057cad041dc2394bad0'
  })
 
  // console.warn(slider.arr)
  const Card=await card.find({
    _id:'63ac5ac417b08f320d41c6b5'
  })


  const Banner=await  banner.find({
    _id:'63ae8ea81c1cab874f2ac880'
  })

  const About=await about.find({
    _id:'63ae9711194baf1744537615'
  })
  console.log(About);

  res.render("index", {
    dettt: details,
    sliderDet:slider,
    card:Card,
    banner:Banner,
    about:About
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

router.post('/contact-form',async(req,res)=>{
  console.log("Form Submitted");

  try {
    const date=await contact.create(req.body);
    res.redirect('/');
  } catch (e) {
    console.log(e);
    res.redirect('/');
  }
})

router.get("*", (req, res) => {
  res.render("nopage");
});

module.exports = router; //router vanne object nai export gareko xa yeha
