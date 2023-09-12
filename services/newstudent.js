const lecturer=require("../models/lecturer");
//const newStudentDetails = require("../models/newstudent");
const newStudent=require("../models/newstudent");
const { lecturerService } = require("./lecturer");

async function fcnInsertNewStudent(req){
    try{
       let check=await lecturer.findOne({universityName:req.body.universityName})
        if(check.length==0){
            return {message:"university not found"}
        }
        let array=[]
        let flag=false;
        for(i=0;i<check.lecturer.length;i++){
            //let arr=check[i].lecturer[0].branches;
            for(j=0;j<check.lecturer[i].branches.length;j++){
                if(req.body.branch==check.lecturer[i].branches[j]){
                    flag=true;
                    array.push(check.lecturer[i]);
                }
            }
        }
        if(flag){
            let result=await new newStudent({
                universityName:req.body.universityName,
                studentName:req.body.studentName,
                branch:req.body.branch,
                lecturer:array,
                joinedDate:req.body.joinedDate


            })
            let dbResponse=await result.save();
            console.log(result, "=========")
            return {message:" new student inserted"}
        }
        return {message:"no lecturer found to be assign for the student"}


    }catch(err){
        throw err;
    }
}

async function fcnGetStudentJoinedDateLatest(req){
    try{
        let check=await newStudent.find({universityName:req.body.universityName});
        check.sort(function(a,b){return a.check.joinedDate-b.check.joinedDate});



    }catch(err){
        throw err;
    }
}

exports.newStudentService={
    fcnInsertNewStudent:fcnInsertNewStudent,
    fcnGetStudentJoinedDateLatest:fcnGetStudentJoinedDateLatest
}