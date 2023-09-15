const mongoose=require("mongoose");
const universitySchema=new mongoose.Schema({
    universityName: {type:String},
    Branches:[{
        branchName: {type:String}, 
        noOfSeats: {type:Number}
    }]
})

const universityDetails=mongoose.model("newUniversity", universitySchema);

module.exports=universityDetails;