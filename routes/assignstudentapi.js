const express=require('express')
const router = express.Router()
const {studentServices} = require("../services/assignstudent");

//date: 19/09/2023
router.put("/assignStudentSubjectsAndMarks", async function(req,res){
  try{
    let data = await studentServices.fcnInsertStudentWithRollNo(req);    
    res.status(200).send(data);                                                                              
                                                                                                                                                                                                                                                                                                               
  }catch(err){
    throw err;
  }
}) 

//date: 26/09/2023
router.put("/deleteStudentWithRollNo", async function(req, res){
  try{
    let data=await studentServices.fcnDeleteStudentWithRollNo(req);
    res.status(200).send(data);
  }catch(err){
    throw err;
  }
})
module.exports=router;
