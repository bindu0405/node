const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    Branch:{type:String},
    studentRollNo:{type:Number}, 
    subjects:[{
        subjectName:{type:String},
        marks:{type:Number}
    }]
})
const studentDetails=mongoose.model("assignStudent", studentSchema)

module.exports=studentDetails;