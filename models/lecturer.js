const mongoose=require("mongoose");
const lecturerSchema=new mongoose.Schema({
    universityName: {type:String},
    lecturerName: {type:String},
    branches: {type:Array}
});
const lecturerdetails=mongoose.model("lecturer", lecturerSchema)

module.exports=lecturerdetails;