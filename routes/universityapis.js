const express=require('express');
const router = express.Router()
const {universityService} = require("../services/university");

//date:28/08/2023

router.post("/insertUniversity", async function(req,res){
  try{
    let data = await universityService.fcnInsertUniversity(req);    
    res.status(200).send(data);                                                                              
                                                                                                                                                                                                                                                                                                               
  }catch(err){
    throw err;
  }
})    

router.get("/getOneUniversity", async function(req, res){
    try{
      let data = await universityService.fcnGetOneUniversity(req);// req,  
      res.status(200).send(data);
    }catch(err){
      throw err;
    }
  })
  

router.get("/getAllUniversities", async function(req, res){
  try{
    let data = await universityService.fcnGetAllUniversities();
    res.status(200).send(data);

  }catch(err){
    throw err;

  }
})

//date:29/08/2023
router.put("/updateUniversityBranch", async function(req, res){
    try{
        let data=await universityService.funUpdateUniversityBranch(req);
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
})

//date:04/09/2023

router.put("/deleteOneUniversityBranch", async function(req, res){
  try{
   let data = await universityService.fcnDeleteOneUniversityBranch(req);
   res.status(200).send(data);
  }catch(err){
   throw err;
  }
})



module.exports = router
