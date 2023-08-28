const branchDetails = require("../models/branchmodel");
let allResult; 

async function fcnInsertBranch(req){
    try{
        for(i=0;i<allResult;i++){
        var check= await branchDetails.findOne({branchName: allResult[i].branchName})
        if(check!=null){
            return {message : "branch already exist."};
        }
       }
        let result = await new branchDetails({branchName: req.body.branchName,});
        let dbResponse = await result.save();
          return {message :"Record Inserted"};
      }catch(err){
        throw err;
      }
}



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
async function fcnGetOneBranch(Branch){                        //(Branch contain the data what we have given in the req db)
    try{    
        let result= await branchDetails.findOne({branchName:Branch})
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


//nodemon  

exports.branchService ={
      fcnInsertBranch : fcnInsertBranch,
      fcnGetAllBranch:fcnGetAllBranch,
      fcnGetOneBranch:fcnGetOneBranch
}