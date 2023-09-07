const mongoose=require("mongoose");
const classSchema=new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},

})
const classDetails=mongoose.model("class",classSchema)
module.exports=classDetails