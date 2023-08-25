const mongoose=require('mongoose')
const dbUri='mongodb://127.0.0.1:27017/collegedb';
module.exports = () => {
    return mongoose.connect('mongodb://localhost:27017/collegedb',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
}