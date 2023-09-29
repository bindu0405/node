const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    universityName:{type:String},
    Branch:{type:String},
    studentRollNo:{type:Number}, 
    subjects:[{
        subjectName:{type:String},
        marks:{type:Number}
    }]
})
const studentDetails=mongoose.model("assignStudent", studentSchema)

module.exports=studentDetails;