const mongoose=require('mongoose');

const contactForm=mongoose.Schema({
    email:String,
    password:String,
    message:String,

})

module.exports=mongoose.model('contact',contactForm);