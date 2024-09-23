const mongoose = require("mongoose");
async function connection(){
    try{
        await mongoose.connect("mongodb://localhost:27017/batch2-20Sep");
        console.log("Connected to MongoDB");
        console.log();
    }catch(err){
        console.log(err,"error") 
    }
}

module.exports = connection;

