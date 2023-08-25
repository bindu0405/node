const express=require('express');
const router = express.Router()
const {branchService} = require("../services/branch");

router.post("/insertBranch", async function(req,res){
  try{
    let data = await branchService.fcnInsertBranch(req.body);
    res.status(200).send(data);                                                                              
                                                                                                                                                                                                                                                                                                               
  }catch(err){
    throw err;
  }
})                                                                      

router.get("/getAllBranch", async function(req,res){
  try{
    let data = await branchService.fcnGetAllBranch();
    res.status(200).send(data);

  }catch(err){
    throw err;
  }
})

router.get("/getOneBranch", async function(req, res){
  try{
    let data = await branchService.fcnGetOneBranch(req.query.branchName);// req,  
    res.status(200).send(data);
  }catch(err){
    throw err;
  }
})


module.exports = router



