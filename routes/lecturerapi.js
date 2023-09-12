const express=require("express");
const router=express.Router();
const {lecturerService}=require("../services/lecturer")

//date:11/09/2023 ,12/09/2023
router.post("/insertLecturerForUniversity", async function(req, res){
    try{
        let data=await lecturerService.funInsertLecturerForUniversity(req);
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
})

//date:11/09/2023 , 12/09/2023
router.get("/getLectureDetails", async function(req, res){
    try{
        let data=await lecturerService.funGetLecturerDetails(req)
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
})
//date:11/09/2023 , 12/09/2023
router.get("/getTotalLecturerCount", async function(req, res){
    try{
        let data=await lecturerService.fcnGetTotalLecturerCount(req)
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
})

module.exports=router;