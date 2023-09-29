const { join } = require("path/posix");
const universityDetails = require("../models/universitymodel");
let allResult; 

async function fcnInsertUniversity(req){
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
            console.log(data, "==========")
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
          throw err;
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
        
            var checkUniversity= await universityDetails.findOne({universityName: req.body.universityName});
        if(checkUniversity==null){
            return {message : "university not found."};
        }
        else{
        console.log(checkUniversity,"12344");
        let arr1=req.body.branches;        
        console.log(arr1.length,"========")

        let arr=checkUniversity.branches;
        console.log(arr,"++++++===")
        for(j=0;j<arr1.length;j++){
            let flag=true;

            console.log(flag, j,"flag ---------------------- j")
            for(i=0;i<arr.length;i++){
                   if(arr1[j]==arr[i]){
                    flag=false;
                   }
            }
            console.log(flag,"==========================");   
            if(flag){            
                let dbResponse = await universityDetails.findOneAndUpdate({universityName:req.body.universityName},{$push:{branches:arr1[j]}},{new:true}); 
                console.log(dbResponse,"dbrespoms");
                //return {message:"branch inserted successfully"}
            }
            //return {message:"branch inserted successfully"}

        }
        return {message:"branch inserted successfully"}
 
        }            

    }catch(err){
        throw err;
    }
}

async function fcnDeleteOneUniversityBranch(req){
    try{
        var check= await universityDetails.findOne({universityName: req.body.universityName})
        if(check==null){
            console.log(check, "123")
          return {message:"university not found"} 
        }
        else{ 

            let arr=check.branches;
            let arr1=req.body.branches;
            console.log(arr,"===========")
            console.log(arr1, "++++++")
            for(j=0;j<arr1.length;j++){
            for(i=0;i<arr.length;i++){
                   console.log(req.body.branches)
                   if(arr1[j]==arr[i]){
                    let dbResponse = await universityDetails.updateOne({universityName: req.body.universityName},{$pull:{"branches":arr[i]}});

                    //return {message:"branch deleted"}
                   }
                }
            }
                    //return {message:"branch not found"}

                    return {message:"branch deleted"}
   
                 
            
        }
      }catch(err){
        throw err;
      }
}


exports.universityService ={
    fcnInsertUniversity : fcnInsertUniversity,
    fcnGetOneUniversity:fcnGetOneUniversity,
    fcnGetAllUniversities:fcnGetAllUniversities,
    funUpdateUniversityBranch:funUpdateUniversityBranch,      
    fcnDeleteOneUniversityBranch:fcnDeleteOneUniversityBranch

}
