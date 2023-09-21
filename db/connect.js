const mongoose = require("mongoose");
const mongo_URL = "mongodb://127.0.0.1:27017/question_list";

mongoose.connect(mongo_URL).then(
    ()=>{
        console.log("Connect Database")
    }
)
.catch((err)=>{
    console.log("Could not connect Database");
})