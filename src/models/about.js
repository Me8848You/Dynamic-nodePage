const mongoose=require('mongoose');

const about=mongoose.Schema({
    title:String,
    description:String
})

module.exports=mongoose.model("about",about);