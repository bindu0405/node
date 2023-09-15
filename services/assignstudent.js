const student=require("../models/assinstudent");
const university=require("../models/university");

async function fcnInsertStudentWithRollNo(req){
    try{
        let check=await university.findOne({universityName:req.body.universityName});
        for(i=0;i<check.Branches.length;i++){
            if(check.Branches[i].branchName==req.body.Branch){

            
        

            let checkBranch=await student.findOne({Branch:req.body.Branch})
                if(check==null){
                    let result=await new student({
                        Branch:req.body.Branch,
                        studentRollNo:req.body.studentRollNo,
                        subjects:[{
                        subjectName:req.body.subjectName,
                        marks:req.body.marks
                        }]
                    })
                        let dbResponse=await result.save();
                }

            }
        }
    }catch(err){
        throw err;
    }
}