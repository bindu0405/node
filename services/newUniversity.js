const university = require("../models/university");

async function fcnInsertUniversityDetails(req){
    try{
        let dbResponse;
        let check=await university.findOne({universityName:req.body.universityName})
        console.log(check, "======")
        if(check==null){
            
            let  result=await new university({
                universityName:req.body.universityName,
                Branches:req.body.Branches
            })
            dbResponse=await result.save();
            return {message:"university inserted with one branch"}
        }else{
            console.log(check.Branches,"123456")

            for(let i=0;i<check.Branches.length;i++){
                if(check.Branches[i].branchName == req.body.Branches[0].branchName){
                    if(check.Branches[i].noOfSeats <= req.body.Branches[0].noOfSeats){
                        dbResponse=await university.updateOne({universityName:req.body.universityName},{$set: {Branches:[{"branchName":req.body.Branches[0].branchName,"noOfSeats":req.body.Branches[0].noOfSeats}]}})
                        return {message:"noOfSeats is greaterthan the previous result so value updated"}
                    }
                    return {message:"given noOfSeats is lessthan the previous result so it does not be modified"}
                }
            }
            dbResponse=await university.updateOne({universityName:req.body.universityName}, {$push:{"Branches":req.body.Branches}})
            return {message:"university updated with one branch details"}
                

            
        }      
        
    }catch(err){
        throw err;
    }
}

async function deleteOneBranchFromUniversity(req){
    try{
        let check=await university.findOne({universityName:req.body.universityName})
        console.log(check, "popop")
        if(check==null){
            return {message:"university not found"}
        }else{
            console.log("in else")
            for(let i=0;i<check.Branches.length;i++){
                console.log(check.Branches[i]);
                if(check.Branches[i].branchName==req.body.branch){
                    let dbResponse=await university.updateOne({universityName:req.body.universityName},{$pull:{"Branches":{"branchName":req.body.branch}}})
                    return {message:"branch deleted"}
                }                
            }
            return {message:"branch not found"}
        } 
    
    }catch(err){
        throw err;
    }
}

exports.newUniversityService={
    fcnInsertUniversityDetails:fcnInsertUniversityDetails,
    deleteOneBranchFromUniversity:deleteOneBranchFromUniversity
}