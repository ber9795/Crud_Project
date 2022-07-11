import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app= express();
const port=5001;

app.use(bodyParser.json());



app.use(cors());

app.get("/", (res,req)=>res.send("hello from express"))

app.listen(port,()=>
console.log(`server is running on port localhost:${port}`));
