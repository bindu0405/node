const student=require("../models/assinstudent");
const newStudent=require("../models/newstudent");

async function fcnInsertStudentWithRollNo(req){
    try{
        let check=await newStudent.find({universityName:req.body.universityName});
        console.log(check, "1234")
        if(check==null){
            return {message:"university not found"}
        }
        else{
            for(i=0;i<check.length;i++){
                if(check[i].branch==req.body.Branch){
                    if(check[i].rollNo==req.body.studentRollNo){
                        let checkResult=await student.find({universityName:req.body.universityName, Branch:req.body.Branch, studentRollNo:req.body.studentRollNo})
                        console.log(checkResult, "abcd" )
                        let result;
                        if(checkResult.length==0){
                             result=await new student({
                                universityName:req.body.universityName,
                                Branch:req.body.Branch,
                                studentRollNo:req.body.studentRollNo,
                                subjects:req.body.subjects
                            });
                            let dbResponse=await result.save();
                            console.log(result, "1234")
                            return {message:"student details inserted"}

                        }else{
                            console.log(checkResult.length, "1234")
                            for(j=0;j<checkResult.length;j++){
                                console.log(checkResult.length, "1234")
                                if(checkResult[j].studentRollNo==req.body.studentRollNo){
                                    dbResponse=await student.updateOne({universityName:req.body.universityName, Branch:req.body.Branch},{$push:{subjects:req.body.subjects}});
                                    return {message:"student details updated"}
                                }
                            }

                        }
                    }
                }
                //return {message:"studentRollNo not found"}
            } 
                //return {message:"studentRollNo not found"}
        }

        return  {message:"branch not found"}
    }catch(err){
        throw err;
    }
}

exports.studentServices={
    fcnInsertStudentWithRollNo:fcnInsertStudentWithRollNo   

}