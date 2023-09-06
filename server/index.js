import express from "express";
import sql from "./db.js";
import cors from "cors"

 const app = express();
 app.use(
   cors({
     origin: ["http://localhost:5173"],
   })
 );
 
 const data = [
   {"id": "1",
   "task": "Take a bath",
   "is_completed":true
   },
   {"id": "2",
   "task": "Eat",
   "is_completed":false
   },
   {"id": "3",
   "task": "Eat some more ",
   "is_completed":false
   },
   {"id": "4",
   "task": "Rest",
   "is_completed":true
   },
   ]

 app.get("/", function (req, res){
    res.send("Hello")
 })

 app.get("/api/todo", function (req, res){
   res.json(data)
})



 app.listen(5000, () => {
    console.log("server is running on port 5173")
 });
 