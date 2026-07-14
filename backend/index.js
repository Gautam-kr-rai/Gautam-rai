import express from 'express'
import dotenv from "dotenv"
import connectDB from './lib/dbConnection.js';
import mongoose from 'mongoose';
import dns from "node:dns/promises";
import contactRoute from "./routes/contact.route.js"  
import cors from "cors"

dns.setServers(["1.1.1.1", "1.0.0.1"]);  
dotenv.config()

const app = express();

const port =  5000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res)=>{
   res.send("welcome to the port 5000")
})

app.use("/api/contact",contactRoute);

app.listen(port, ()=>{
  connectDB()
  console.log(`server is listing at ${port}`);
})