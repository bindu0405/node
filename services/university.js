const { join } = require("path/posix");
const universityDetails = require("../models/universitymodel");
let allResult; 

async function fcnInsertUniversity(req,res){
    try{
        var checkResult=await universityDetails.findOne({universityName:req.body.universityName});
        if(checkResult != null){
          return ({message:"already university exsit"})
        }
        else{
            var data=await new universityDetails({
                universityName:req.body.universityName,
                branches:req.body.branches
            })
            await data.save();
            return ({message:"university added successfuly done"})
        }
           /* for(i=0;i<allResult;i++){
            var check= await universityDetails.findOne({universityName: allResult[i].universityName})
            if(check!=null){
                return {message : "university already exist."};
            }
           }
            let result = await new universityDetails({
                 universityName: req.body.universityName,
                branches  : req.body.branches
             });
             let dbResponse = await result.save();
           return {message :"Record Inserted"}; */
         
        
      }catch(err){
          res.send(err)
      }
}


async function fcnGetOneUniversity(req){                        
    try{    
      let result= await universityDetails.findOne({universityName:req.query.universityName})
        if(result == null){
            return {message :"No data found"}
        }
        console.log(result)
        return result;
    }
    catch(err){
        throw err;
    }
}



async function fcnGetAllUniversities(){
    try{
         allResult = await universityDetails.find();
        if(allResult.length == 0){
        return {message :"no data found"}
        }

        return allResult;
        
    }catch(err){
        throw err;
    }
}

console.log(allResult, "1241345")
async function funUpdateUniversityBranch(req){
    try{
        
            var checkUniversity= await universityDetails.findOne({universityName: req.body.universityName});
            if(checkUniversity==null){
                return {message : "university not found."};

            }
            else{
            console.log(checkUniversity,"12344");
            let arr=checkUniversity.branches;
            for(i=0;i<arr.length;i++){
                if(arr.length!=0){
                   console.log(arr)
                   console.log(req.body.branches[0],)
                   if(arr[i]==req.body.branches){
                    return {message:"branch already existed"}
                   }
                   
                }  
            }
                
                let dbResponse = await universityDetails.updateOne(checkUniversity,{$push:{"branches":req.body.branches[0]}}); 
                console.log(dbResponse,"dbrespoms");
                return {message:"branch inserted successfully"}
            
        }            

    }catch(err){
        throw err;
    }
}

exports.universityService ={
    fcnInsertUniversity : fcnInsertUniversity,
    fcnGetOneUniversity:fcnGetOneUniversity,
    fcnGetAllUniversities:fcnGetAllUniversities,
    funUpdateUniversityBranch:funUpdateUniversityBranch
}
