
const mongoose=require("mongoose")
const { connect } = require("../config/connectDB")

const schema=mongoose.Schema

const FilmModel=new schema({
    title:{
        type:String,
        required:true
    },
    rate:{
        type:Number,
        
    },
    description:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Film",FilmModel)