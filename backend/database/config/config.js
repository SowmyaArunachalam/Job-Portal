//Require Statement
const mongoose = require("mongoose");
require('colors')


//Connect Database Function
const connectDb=async()=>{
   try{
     const connect  = await mongoose.connect(process.env.MONGO_URL)
     console.log(`Successfully Connected To MongoDb Database ${connect.connection.host}`.bgMagenta.white)
   }
   catch(error){
       console.log(`Error While Connecting To MongoDb Database ${error}`.bgRed.white)
   }
}


//Export Statement
module.exports = connectDb