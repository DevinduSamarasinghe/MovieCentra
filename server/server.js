import express from "express";

//bodyParser is used to parse the body of the request and make it available in req.body
import bodyParser from "body-parser";
import mongoose from "mongoose";

//cors is used to allow cross origin resource sharing
import cors from "cors";

//This is required to import the .env file
import dotenv from "dotenv/config";


//importing routes
import userRoutes from "./routes/user.routes.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//assigning routes
app.use('/',userRoutes);

//mongoDb connection
const PORT = process.env.PORT || 8080;
const URL = process.env.MONGODBURL;

mongoose.set('strictQuery', false);
mongoose.connect(URL);
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB connection is Succcessful");
});

app.listen(PORT, ()=>{
    console.log("Server is up and running on port number: " + PORT);
})