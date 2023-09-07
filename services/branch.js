const branchDetails = require("../models/branchmodel");
let allResult; 
//date:30/08/2023
async function fcnInsertBranch(req){
    try{
        var check= await branchDetails.find({universityName: req.body.universityName})
        if(check!=null){
            console.log(check, "123")
            for(i=0;i<check.length;i++){
                var checkBranches=await branchDetails.findOne({branchName: req.body.branchName})
                if(checkBranches!=null){
                    console.log(checkBranches, "abcd")
                    return {message:"branch already existed"}
                }
            }
       }
        let result = await new branchDetails({
            universityName: req.body.universityName,
            branchName: req.body.branchName

        });
        let dbResponse = await result.save();
          return {message :"Record Inserted"};
      }catch(err){
        throw err;
      }
}

//end

async function fcnGetAllBranch(){
    try{
         allResult = await branchDetails.find();
        console.log(allResult)
        if(allResult.length == 0){
        return {message :"no data found"}
        }

        return allResult;
        
        //  not result.... then retun no data found
        //  return all branch.

    }catch(err){
        throw err;
    }
}
async function fcnGetOneBranch(Branch){
    console.log(Branch,"brankjk")                        //(Branch contain the data what we have given in the req db)
    try{    
        let result= await branchDetails.findOne({branchName:Branch})
     console.log(result,"rdefsds")
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


async function funInsertOneField(req){
    try{
        let check=await branchDetails.findOne({universityName:req.body.universityName});
        //console.log(check, "======")
        if(check==null){
            return {message:"university not found"}
        }
        //let flag=true;
    
            let flag=true;

            if("universityId" in check){  // condition == true false < > ! != "ABC" !=2   data:{k1:}  if(k1 in data)
                flag=false;
            } 
        if(flag){       
        let result=await branchDetails.updateOne({universityName:req.body.universityName}, {$set:{"universityId":req.body.universityId}})
        let dbResponse=await result.save;
        console.log(dbResponse, "123")
        }
        return {message:"new field inserted"}

        

    }catch(err){
        throw err;
    }
}

async function fundeleteOneFiled(req){
    try{
        let check=await branchDetails.findOne({universityName:req.body.universityName});
        if(check==null){
            return {message:"university not found"}
        }
        let result =await branchDetails.updateOne({universityName:req.body.universityName}, {$unset:{"universityId":req.body.universityId}});
        let dbResponse=await result.save;
        return {message:" field deleted"}
        


    }catch(err){
        throw err;
    }
}



//nodemon  

exports.branchService ={
      fcnInsertBranch : fcnInsertBranch,
      fcnGetAllBranch:fcnGetAllBranch,
      fcnGetOneBranch:fcnGetOneBranch,
      funInsertOneField:funInsertOneField,
      fundeleteOneFiled:fundeleteOneFiled
}