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


async function funInsertOneField(college){
    console.log(college, "abcd123");
    try{
        let check=await branchDetails.find();
        console.log(check, "cvcvcv")
        let result = await new branchDetails(check,college);
        for(i=0;i<check.length;i++){
        let dbResponse=await branchDetails.updateMany(check[i], {$set:{college}},{upsert:true, multi:true})
        console.log(dbResponse, "123")
        }
        return result;
        console.log(result, "12345")
    }catch(err){
        throw err;
    }
}



//nodemon  

exports.branchService ={
      fcnInsertBranch : fcnInsertBranch,
      fcnGetAllBranch:fcnGetAllBranch,
      fcnGetOneBranch:fcnGetOneBranch,
      funInsertOneField:funInsertOneField
}