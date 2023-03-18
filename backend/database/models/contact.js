const mongoose = require("mongoose")

const Contact = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phon:{
        type:String,
        required:true
    },
    budge:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = new mongoose.model("contact",Contact)