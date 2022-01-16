const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("Connected to MongoDb"))
.catch((err)=>{console.log(err)});

app.listen("5000", ()=>{
    console.log("Server Running!");
});