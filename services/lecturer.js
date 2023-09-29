const university=require("../models/universitymodel")
const lecturer=require("../models/lecturer")

async function funInsertLecturerForUniversity(req){
    try{
    let check=await university.findOne({universityName:req.body.universityName});
    if(check==null){
        return {message:"university not found to assign lecturer"}
    }
    let flag=false;
    //let array=[]

        for(i=0;i<check.branches.length;i++){
            for(j=0;j<req.body.lecturer[0].branches.length;j++){
                if(check.branches[i]==req.body.lecturer[0].branches[j]){
                    flag=true;
                    break;
                    //continue;

                }
            }
        }
        if(flag){

            let result=await new lecturer({
                universityName:req.body.universityName,
                lecturer: req.body.lecturer 
                
            })
            let checkUniversity=await lecturer.findOne({universityName:req.body.universityName})
            console.log(checkUniversity,"------")


            let dbResponse;
            console.log(result,"=====")
            if(checkUniversity==null ){
             dbResponse=await result.save();

            }

                if(checkUniversity.universityName==req.body.universityName){
                     dbResponse=await lecturer.updateOne({universityName:req.body.universityName}, {$push:{"lecturer":req.body.lecturer}})



                }
            return {message:"lecturer is assigned to university"}


        }
        return {message:"no one branch is matched to the university"}
    }catch(err){
        throw err;
    }
}

async function funGetLecturerDetails(req){
    try{
        check= await lecturer.findOne({universityName:req.body.universityName})
        console.log(check)
        if(check==null){
            return {message:"university not found"}
        }
        
        let array=[]
        let flag=false;
        for(i=0;i<check.lecturer.length;i++){
            if(check.lecturer[i].lecturerName==req.body.lecturerName){
                array.push(check.lecturer[i])
                flag=true

            }
                
        }
        if(flag){
            return array;

        }
        return {message:"lecturer name not found"}


    }catch(err){
        throw err;
    }
}

async function fcnGetTotalLecturerCount(req){
    try{
       let check=await lecturer.findOne({universityName:req.body.universityName})
       
       //for(i=0;i<check.lecturer.length;i++){
        if(check==null){
            return {message:"no more lecturers to count"}
        }
   // }

        return {"count":check.lecturer.length}
    }catch(err){
        throw err;
    }
}

exports.lecturerService={
    funInsertLecturerForUniversity:funInsertLecturerForUniversity,
    funGetLecturerDetails:funGetLecturerDetails,
    fcnGetTotalLecturerCount:fcnGetTotalLecturerCount
}