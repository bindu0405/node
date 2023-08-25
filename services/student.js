const studentDetails = require("../models/studentmodel");
const branchDetails=require("../models/branchmodel")

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


// data
// no data


async function fcnGetAllStudents(){   
    try{
        let result = await studentDetails.find(); 
        console.log(result)
        if(result.length == 0)
        return {message :"no data found"}

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
        return {"count":result.length}

    }catch(err){
        throw err;
    }
}

exports.studentService={
    fcnInsertStudent:fcnInsertStudent,      //here one for browser url nd one for serch the fun where in this file
    fcnGetAllStudents:fcnGetAllStudents,
    fcnCountStudents:fcnCountStudents

}
