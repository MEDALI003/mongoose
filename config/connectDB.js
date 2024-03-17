const mongoose = require("mongoose");
require("dotenv").config()
exports.connect = async () => {
  try {
    await mongoose.connect(process.env.link);
    console.log("connected to DB");
  } catch (error) {
    console.log("connection failed");
  }
}

