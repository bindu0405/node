const express = require("express");
const bodyParser=require('body-parser')
let port=3500;
//local imports
const connectDb=require('./db.js')
const branchRoutes= require('./routes/branchapis.js')
const studentRoutes=require("./routes/studentapis.js")
const universityRoutes=require("./routes/universityapis.js")
const lecturerRoutes=require("./routes/lecturerapi.js")
const newStudentRoutes=require("./routes/newstudentapi.js")
const newUniveristyRoutes=require("./routes/newuniversityapis.js")
const nextStudentRoutes=require("./routes/assignstudentapi.js")
const { errorHandler } = require('./middlewares/errors.js')
const app = express();
//middleware
app.use(bodyParser.json())
app.use(branchRoutes)
app.use(studentRoutes)
app.use(universityRoutes)
app.use(lecturerRoutes)
app.use(newStudentRoutes)
app.use(newUniveristyRoutes)
app.use(nextStudentRoutes)
app.use(errorHandler)

connectDb()
.then(()=>{
    console.log('dbconnection succeeded')
    console.log("fksljdssd")
    app.listen(port,
    ()=>console.log('server started at: 3500'))
})
.catch(err=>console.log(err));


