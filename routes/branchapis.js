const express=require('express');
const router = express.Router()
const {branchService} = require("../services/branch");
//date: 05/09/2023
router.post("/insertBranch", async function(req,res){
  try{
    let data = await branchService.fcnInsertBranch(req);    
    res.status(200).send(data);                                                                              
                                                                                                                                                                                                                                                                                                               
  }catch(err){
    throw err;
  }
})                                                                      

//date: 05/09/2023

router.get("/getAllBranch", async function(req,res){
  try{
    let data = await branchService.fcnGetAllBranch();
    res.status(200).send(data);

  }catch(err){
    throw err;
  }
})

//date: 05/09/2023

router.get("/getOneBranch", async function(req, res){

  try{
    console.log(req.body.branchName,"jfdshkdsk")
    let data = await branchService.fcnGetOneBranch(req.body.branchName);// req,  
    res.status(200).send(data);
  }catch(err){
    throw err;
  }
})

//date:30/08/2023
router.put("/insertOneField", async function(req, res){
   try{
    let data = await branchService.funInsertOneField(req);
    res.status(200).send(data);
   }catch(err){
    throw err;
   }
})

//date:06/09/2023
router.put("/deleteOneField", async function(req,res){
  try{
    let data = await branchService.fundeleteOneFiled(req);
    res.status(200).send(data);
  }catch(err){
    throw err;
  }
})





module.exports = router



