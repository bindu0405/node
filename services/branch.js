const branchDetails = require("../models/branchmodel");


async function fcnInsertBranch(){
      try{

        let result = await new branchDetails({branchName: req.body.branchName,});
        let dbResponse = await result.save();
          return {message :"Record Inserted"};
      }catch(err){
        throw err;
      }
}



async function fcnGetAllBranch(){
    try{
        let result = await branchDetails.find();
        console.log(result)
        if(result.length == 0){
        return {message :"no data found"}
        }

        return result;
        
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