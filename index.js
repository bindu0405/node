const express = require("express");
const bodyParser=require('body-parser')
let port=3500;
//local imports
const connectDb=require('./db.js')
const branchRoutes= require('./routes/branchapis.js')
const studentRoutes=require("./routes/studentapis.js")
const { errorHandler } = require('./middlewares/errors.js')
const app = express();
//middleware
app.use(bodyParser.json())
app.use('/api/branch', branchRoutes)
app.use(studentRoutes)
app.use(errorHandler)

connectDb()
.then(()=>{
    console.log('dbconnection succeeded')
    app.listen(port,
    ()=>console.log('server started at: 3500'))
})
.catch(err=>console.log(err));

