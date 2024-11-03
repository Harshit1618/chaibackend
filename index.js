const express = require("express")
require("dotenv").config()
const app = express()

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/home',(req,res)=>{
    res.send("in hitesh chowdary backend")
})

app.listen(process.env.PORT,()=>{
    console.log("server started")
})