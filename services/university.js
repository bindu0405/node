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


async function funUpdateUniversityBranch(req){
    try{
        var arr=[]        
            var checkUniversity= await universityDetails.findOne({universityName: req.body.universityName});
            if(checkUniversity==null){
                return {message : "university not found."};

            }
            else{
                for (let i= 0; i< checkUniversity.branches.length; i++) {
                   
                    //console.log(checkUniversity.branches[i],"Branch")
                    arr.push(checkUniversity.branches[i]);

                for (let j= 0; j< req.body.branches.length; j++) {
                    
                    arr.push(req.body.branches[j])
                    if(checkUniversity.branches[i]==req.body.branches[j]){
                        checkUniversity.branches[i].push(req.body.branches[j])
                     }
                }
                
                }
                
            

               
            return checkUniversity;
            //    var checkBranches= await universityDetails.findOne({branches: req.body.branches})
            //     if(checkBranches!=null){
            //       return {message  :   "branch already existed"}                     

            //     }


            //     else{            
            //       let result = await new universityDetails({branches: req.body.branches});
            //     } 
            //     let dbResponse = await universityDetails.branches.push({branches: req.body.branches}); 
            //     return {message:"branch inserted successfully"}
            //   var updatedata=await universityDetails.updateOne({universityName:req.universityName},{$set:{"branches":branches},new :true})
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
