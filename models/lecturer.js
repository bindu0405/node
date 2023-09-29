const mongoose=require("mongoose");
const lecturerSchema=new mongoose.Schema({
    universityName: {type:String},
    lecturer:[{
    lecturerName: {type:String},
    branches: {type:Array}
    }]
});
const lecturerdetails=mongoose.model("lecturer", lecturerSchema)

module.exports=lecturerdetails;