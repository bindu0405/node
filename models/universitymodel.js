const mongoose=require("mongoose")

const universitySchema = new mongoose.Schema({
      universityName: {type: String},
      branches  : {type: Array}
})

const universityDetails = mongoose.model("university",universitySchema);

module.exports = universityDetails;
