const mongoose=require("mongoose");
const newStudentSchema=new mongoose.Schema({
    universityName: {type:String},
    studentName: {type:String},
    branch: {type:String},
    lecturer: {type:Array},
    joinedDate: {type:String}
})
 
const newStudentDetails=mongoose.model("newStudent",newStudentSchema)

module.exports=newStudentDetails