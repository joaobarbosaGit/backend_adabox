import express from 'express';
import dotenv from 'dotenv';
import Mongoose from 'mongoose';
const MongoClient = require('mongodb').MongoClient;

dotenv.config();

const mongoose = Mongoose;

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Server is Running!!!" })
});

app.listen(4000, () => {
    console.log("Server is Running");
});
