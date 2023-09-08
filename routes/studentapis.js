const express=require('express');
const router=express.Router()
const {studentService}=require("../services/student");

router.post("/insertStudent", async function(req,res) {
    try{
        console.log(req.body,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      let data = await studentService.fcnInsertStudent(req.body);
      res.status(200).send(data);
  


    }catch(err){
      throw err;
    }
  })

  router.post("/insertStudentForUniversity",async function(req, res){
    try{
      let data=await studentService.fcnInsertStudentForUniversity(req);
      res.status(200).send(data);
    }catch(err){
      throw err;
    }
  })
  
  router.get("/getAllStudents", async function(req,res){
    try{
      let data = await studentService.fcnGetAllStudents(); //here student is the function parameter what we have given in the function
      res.status(200).send(data);
  
    }catch(err){
      throw err;
    }
  })

  router.get("/countStudents", async function(req,res){
    try{
        let data= await studentService.fcnCountStudents();
        console.log(data,"==================================");
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
  })

  router.put("/countuniversitystudents", async function(req, res){
    try{
      let data= await studentService.fcnCountUniversityStudents(req);
      res.status(200).send(data);
    }catch(err){
      throw err;
    }
  })

  module.exports = router






