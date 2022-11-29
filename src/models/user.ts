import mongoose, { Schema, SchemaTypes } from "mongoose";

const User = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    _id:{
        type:SchemaTypes.ObjectId,
    }
})

export = mongoose.model('User',User);