const mongoose=require("mongoose")
// module.exports = mongoose.model('students',{
//     studentName: {type: String},
//     branchName: {type: Array},
//     studentRollNo: {type: Number},
// });
const studentSchema = new mongoose.Schema({
    studentName: {type: String},
    branchName: {type: String},
    universityName: {type: String},
    //studentRollNo: {type: Number}

})

const studentDetails = mongoose.model("students",studentSchema);  //"students" is the collection name which is created in the database

module.exports = studentDetails;