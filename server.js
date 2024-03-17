
const express=require("express")
const { connect } = require("./config/connectDB"); 
const router = require("./Routes/paths");


const app=express()

app.use(express.json())

const port=8000

connect()

app.listen(port,(error)=>{
    error?console.log("the server is down"):console.log(`the server is running on port :${port}`)
})
app.use("/api/films",router)