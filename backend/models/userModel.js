import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,requred:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cart
})