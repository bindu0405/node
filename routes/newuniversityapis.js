const express=require("express");
const router=express.Router();
const {newUniversityService}=require("../services/newUniversity")
 
//date:14/09/2023

router.post("/insertNewUniversity.com", async function(req, res){
    try{
    let data=await newUniversityService.fcnInsertUniversityDetails(req);
    res.status(200).send(data);
    }catch(err){
        throw err;
    }
}) 
module.exports=router;