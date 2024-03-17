
const Film=require("../Models/FilmModel")


exports.addFilm=async(req,res)=>{
    try {
        const {title,rate,description}=req.body
        const newFilm=new Film({ title, rate, description });
        await newFilm.save()
        res.status(200).send({msg:"the Movie is added to the cloud"})
    } catch (error) {
        res.status(500).send({msg:"cannot add data",error:error.message})
    }
}
exports.getFilm=async(req,res)=>{
    try {
        const FoundMovies=await Film.find()
        res.status(200).send({msg:"the Movie founded are",FoundMovies})
    } catch (error) {
        res.status(500).send({msg:"cannot find any",error:error.message})
    }
}