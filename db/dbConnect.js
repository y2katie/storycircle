const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', true);


async function dbConnect(){

 mongoose
    .connect (
      process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )


    .then ( () => {
      console.log("Successfully connected")
    })
    .catch ( (error) => {
      console.log("Unable to connect");
      console.error(error);
    })
}



module.exports = dbConnect;