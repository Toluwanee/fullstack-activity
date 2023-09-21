import express from "express";
import sql from "./db.js";
import cors from "cors"

 const app = express();
 
 
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

 app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

 app.get("/api/todos", async (req, res) =>{
   const todos = await sql `select * from todos`
  //  console.log(todos)
   if (todos) 
   {
    res.status(200).send(todos)
   } else{
    res.status(404).send("Error, leave")
   }
   res.status(todos)
})

app.post("/api/todos2", async(req, res) => {
  const todos2 = await sql `INSERT INTO todos (task, is_completed) VALUES ('Eat jollof rice', false)`
  console.log(todos2)
  if (todos2){
    res.status(201).send("Successfully inserteed, You can return ")
  }
  else{
    res.status(404).send("Error 404")
  }
  
})

// Put section
app.put("/api/todos2/:id", async (req, res) => {
  const { id } = req.params;
  const { task, is_completed } = req.body;

  try {
    const updatedTodo = await sql`
      UPDATE todos
      SET task = ${task}, is_completed = ${is_completed}
      WHERE id = ${id}
      RETURNING *
    `;

    if (updatedTodo && updatedTodo.length > 0) {
      res.status(200).json(updatedTodo[0]);
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).send("Internal server error");
  }
});



app.delete("/api/todos2/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await sql`DELETE FROM todos WHERE id = ${id} RETURNING *`;
    
    if (deletedTodo && deletedTodo.length > 0) {
      res.status(200).json(deletedTodo[0]);
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).send("Internal server error");
  }
});


 app.listen(5000, () => {
    console.log("server is running on port 5000")
 });
 