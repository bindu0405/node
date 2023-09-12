const express=require("express");
const router=express.Router();
const {newStudentService}=require("../services/newstudent")
//date:12/09/2023
router.post("/insertNewStudent", async function(req,res){
    try{
    let data=await newStudentService.fcnInsertNewStudent(req);
    res.status(200).send(data);
    }catch(err){
        throw err;
    }
})

module.exports = router;