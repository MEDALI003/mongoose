const express=require("express")
const { addFilm, getFilm } = require("../Controllers/FilmApi")

const router=express.Router()

router.post("/addFilm",addFilm)
router.get("/getFilm",getFilm)

module.exports=router
