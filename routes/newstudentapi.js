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

//date:14/09/2023
router.put("/InsertingStudentUniversityBranchLecturer", async function(req, res){
    try{
        let data=await newStudentService.fcnInsertNewStudentForUniversity(req);
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
})

//date:13/09/2023

router.put("/getStudentJoinedDateLatest", async function(req, res){
    try{
        let data=await newStudentService.fcnGetStudentJoinedDateLatest(req);
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
})

//date:13/09/2023

router.put("/getStudentJoinedDatePast", async function(req, res){
    try{
        let data=await newStudentService.fcnGetStudentJoinedDatePast(req);
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
})


//date:13/09/2023
router.put("/getTotalStudentsForEachBranch", async function(req, res){
    try{
        let data=await newStudentService.fcnTotalStudentsForEachBranch(req);
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
})

module.exports = router;