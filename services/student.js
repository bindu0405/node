const studentDetails = require("../models/studentmodel");
const branchDetails=require("../models/branchmodel")
const university=require("../models/universitymodel");    //we assume university as any type this is our assumption but we should give the file path for the required file
const { branchService } = require("./branch");
async function fcnInsertStudent(data){
      try{
        var checkBranch=await branchDetails.findOne({branchName:data.branchName})
        if(checkBranch==null){
        return {message :"no branch found"}
        }


        let result = await new studentDetails({
            studentName: data.studentName,
            branchName:data.branchName, 
            studentRollNo:data.studentRollNo
        });
         let dbResponse = await result.save();
          return {message :"Record Inserted"};

          
      }catch(err){
        
        throw err;
      }
}


async function fcnInsertStudentForUniversity(req){
    try{
        var checkUniversity= await university.findOne({universityName:req.body.universityName});
        if(checkUniversity==null){
            return {message:"university not found"}
        }
        let flag = false;
        let arr=checkUniversity.branches;
        for(i=0;i<arr.length;i++){
            if(arr[i] != req.body.branchName){
                continue;
            }
            flag = true;
            break;

        }
        if(flag){

            let result=await new studentDetails({
                studentName: req.body.studentName,
                branchName: req.body.branchName,
                universityName: req.body.universityName,
            
            })
        
            let dbResponse=await result.save()

            return {message:"student details inserted"}

        }
        return {message:"selected branch is not available in this university"}

    }catch(err){
        throw err;
    }
}

// data
// no data


async function fcnGetAllStudents(){   
    try{
        let result = await studentDetails.find(); 
        console.log(result)
        if(result.length == 0){
        return {message :"no data found"}
        }
        return result;
    }catch(err){
        throw err;
    }
}

async function fcnCountStudents(){
    try{
        let result = await studentDetails.find({branchName:"CSE"});  //find() for getting all student count
        console.log(result)
        if(result.length == 0){
        return {message :"no data found to count"}
        }
        return {"count":result.length};

    }catch(err){
        throw err;
    }
}

async function fcnCountUniversityStudents(req){
    try{
        let check=await studentDetails.find({universityName:req.body.universityName})
        console.log(check)
        if(check.length==0){
            return {message:"university name not found"}
        }

        for(i=0;i<check.length;i++){
            console.log(check[i].branchName)
        }
        let result= await studentDetails.countDocuments({universityName:req.body.universityName})
        console.log(result);
        console.log(req.body.universityName.branchName)
        
        if(result.length == 0){
            return {message :"no data found to count"}
            }
        
            return {universityName:req.body.universityName,"studentCount":result};
        
    
    }catch(err){
        throw err;
    }
}


exports.studentService={
    fcnInsertStudent:fcnInsertStudent,      //here one for browser url nd one for serch the fun where in this file
    fcnGetAllStudents:fcnGetAllStudents,
    fcnCountStudents:fcnCountStudents,
    fcnInsertStudentForUniversity:fcnInsertStudentForUniversity,
    fcnCountUniversityStudents:fcnCountUniversityStudents

}
