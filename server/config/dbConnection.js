const mongoose = require("mongoose");
require("dotenv").config();
const connectDatabase = ()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("Database Connection Successful");
    }).catch((error)=>{
        console.log("Database Connection Error : ",error);
        process.exit(1);
    })
}


module.exports = connectDatabase