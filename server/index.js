import express from "express";
import sql from "./db.js";

 const app = express();

 app.get("/", function (req, res){
    res.send("Hello")
 })

 app.listen(5000, () => {
    console.log("server is running on port 5173")
 });
 