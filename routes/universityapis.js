const express=require('express');
const router = express.Router()
const {universityService} = require("../services/university");

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

router.put("/updateUniversityBranch", async function(req, res){
    try{
        let data=await universityService.funUpdateUniversityBranch(req);
        res.status(200).send(data);
    }catch(err){
        throw err;
    }
})


module.exports = router
