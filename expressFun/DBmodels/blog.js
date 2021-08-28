//setting up for the database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating blogs schema
const bSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    snippet:{
        type: String,
        required:true
    },
    body:{
        type: String,
        required:true
    }
    
},
{timestamps:true});

//creating the model
const Blog = mongoose.model('Blog', bSchema); //this name is IMP.
module.exports = Blog; //to be used in other file.
