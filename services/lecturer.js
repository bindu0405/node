const university=require("../models/universitymodel")
const lecturer=require("../models/lecturer")

async function funInsertLecturerForUniversity(req){
    try{
    check=await university.findOne({universityName:req.body.universityName});
    if(check==null){
        return {message:"university not found to assign lecturer"}
    }
    let flag=false;
      
        for(i=0;i<check.branches.length;i++){
            for(j=0;j<req.body.branches.length;j++){
                if(check.branches[i]==req.body.branches[j]){
                    flag=true;
                    break;
                    //continue;

                }

            }
        }
        if(flag){
            let result=await new lecturer({
                universityName:req.body.universityName,
                lecturerName:req.body.lecturerName,
                branches:req.body.branches
            })
            let dbResponse=await result.save();
            return {message:"lecturer is assigned to university"}


        }
        return {message:"no one branch is matched to the university"}
    }catch(err){
        throw err;
    }
}

async function funGetLecturerDetails(req){
    try{
        check= await lecturer.find({universityName:req.body.universityName})
        console.log(check)
        if(check.length==0){
            return {message:"university not found"}
        }
        
        let array=[]
        let flag=false;
        for(i=0;i<check.length;i++){
            if(check[i].lecturerName==req.body.lecturerName){
                array.push(check[i])
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
        check=await lecturer.find({universityName:req.body.universityName})
        if(check.length==0){
            return {message:"no more lecturers to count"}
        }
        return {"count":check.length}
    }catch(err){
        throw err;
    }
}

exports.lecturerService={
    funInsertLecturerForUniversity:funInsertLecturerForUniversity,
    funGetLecturerDetails:funGetLecturerDetails,
    fcnGetTotalLecturerCount:fcnGetTotalLecturerCount
}