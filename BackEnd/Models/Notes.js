const mongoose= require('mongoose');

const NoteSchema = new Schema
    (
    { Title: {type:String, required:true},
     description: {type:String, required:true},  
     tag:{type:String, default:"General"},
    date:{type:Date, default:Date.now}}
    );

    module.exports=mongoose.model('Note',NoteSchema);