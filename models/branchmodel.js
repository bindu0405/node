const mongoose=require("mongoose")

const branchSchema = new mongoose.Schema({
      universityName: {type: String},
      universityId: {type:Number},
      branchName: {type: String}

})

const branchDetails = mongoose.model("branch",branchSchema);

module.exports = branchDetails;
console.log(branchDetails,"+++++++++++")





