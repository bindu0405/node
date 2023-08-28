const mongoose=require("mongoose")

const branchSchema = new mongoose.Schema({
      branchName: {type: String},
      universityName: {type: String} 
})

const branchDetails = mongoose.model("branch",branchSchema);

module.exports = branchDetails;
console.log(branchDetails,"+++++++++++")





