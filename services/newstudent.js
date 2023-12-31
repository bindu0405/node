const lecturer=require("../models/lecturer");
const newStudent=require("../models/newstudent");
const university=require("../models/universitymodel")
const newUniversity=require("../models/university")
const { lecturerService } = require("./lecturer");

async function fcnInsertNewStudent(req){
    try{
       let check=await lecturer.findOne({universityName:req.body.universityName})
        if(check==null){
            return {message:"university not found"}
        }
        console.log(check,"==================================");
        console.log(req.body.branch,"==================================branch==================================");
        let array=[]
        let flag=false;
        for(i=0;i<check.lecturer.length;i++){
            console.log(check.lecturer[i].branches,"-------------------------------");
            for(j=0;j<check.lecturer[i].branches.length;j++){
                if(req.body.branch==check.lecturer[i].branches[j]){
                    flag=true;
                    array.push(check.lecturer[i]);
                }
            }
        }
        console.log(flag,'flag============================');
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

async function fcnInsertNewStudentForUniversity(req){
    try{
       let check=await newUniversity.findOne({universityName:req.body.universityName})
        if(check==null){
            return {message:"university not found"}
        }else{
                
                for(k=0;k<check.Branches.length;k++){ss
                    if(check.Branches[k].branchName==req.body.branch){
                        let checkBranch=await newStudent.find({universityName:req.body.universityName,branch:req.body.branch})
                        if(checkBranch.length==0){
                                let result=await new newStudent({
                                    universityName:req.body.universityName,
                                    studentName:req.body.studentName,
                                    branch:req.body.branch,
                                    joinedDate:req.body.joinedDate,
                                    rollNo:1
                                })
                            dbResponse=await result.save();

                        }else{
                        
                            let a=checkBranch.length+1
                            if(check.Branches[k].noOfSeats>=a){
                                let result=await new newStudent({
                                    universityName:req.body.universityName,
                                    studentName:req.body.studentName,
                                    branch:req.body.branch,
                                    joinedDate:req.body.joinedDate,
                                    rollNo:a
                                })

            
                                dbResponse=await result.save();

                            }else{
                                return {message:"No seats available"};
                            }
                        }
                    }
                }
    
            }
         return{message :"Student Inserted"};
    }catch(err){
        throw err;
    }
}


async function fcnGetStudentJoinedDateLatest(req){
    try{
        let check=await newStudent.find({universityName:req.body.universityName});
        if(check.length==0){
            return {message:"university not found"}
        }
           check.map(str => {
            let joinedDate=new Date(str.joinedDate);
          }); 
          let latest = check.sort(
            (strA, strB) => Number(strB.joinedDate) - Number(strA.joinedDate),
          );
        
          console.log(latest, "++++++")
          return latest;



    }catch(err){
        throw err;
    }
}

async function fcnGetStudentJoinedDatePast(req){
    try{
        let check=await newStudent.find({universityName:req.body.universityName});
        if(check.length==0){
            return {message:"university not found"}
        }
           check.map(str => {
            let joinedDate=new Date(str.joinedDate);
          }); 
          let past = check.sort(
            (strA, strB) => Number(strA.joinedDate) - Number(strB.joinedDate),
          );
        
          console.log(past, "++++++")
          return past;



    }catch(err){
        throw err;
    }
}


async function fcnTotalStudentsForEachBranch(req){
    try{
        let check=await newStudent.find({universityName:req.body.universityName})
        console.log(check,"----")

        if(check.length==0){
            return {message:"university not found"}
        }
         let arr=[]

        
        let checkBranch=await university.findOne({universityName:req.body.universityName})

            for(let i=0;i<checkBranch.branches.length;i++){
                let sum=0;
                console.log(check.branch)

                for(let j=0;j<check.length;j++){
                    console.log(check[j].branch)

                    if(checkBranch.branches[i]==check[j].branch){
                        sum=sum+1;
                    }
                    
               }
               console.log(checkBranch.branches[i],"after for loop");
                arr.push({branch: checkBranch.branches[i],branchCount:sum})        
            }
            console.log(arr, "===")
            return arr;
    }catch(err){
        throw err;
    }
}

exports.newStudentService={
    fcnInsertNewStudent:fcnInsertNewStudent,
    fcnGetStudentJoinedDateLatest:fcnGetStudentJoinedDateLatest,
    fcnGetStudentJoinedDatePast:fcnGetStudentJoinedDatePast,
    fcnTotalStudentsForEachBranch:fcnTotalStudentsForEachBranch,
    fcnInsertNewStudentForUniversity:fcnInsertNewStudentForUniversity
}