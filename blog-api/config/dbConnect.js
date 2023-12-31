const mongoose = require("mongoose");

//const dotenv = require("dotenv");
//dotenv.config();
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected successfully...");
  } catch (error) {
    console.log(error.message);
  }
};

dbConnect();
