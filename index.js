
// const student = require("./student");
// student.getDetails();
// student.display();

const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const taskControllers = require("./controller/taskController");

dotenv.config();

const app = express();
app.use(express.json());

app.post("/tasks",taskControllers.createTask);
app.get("/tasks",taskControllers.getTasks);
app.get("/tasks/:id",taskControllers.getTaskById);
app.patch("/tasks/:id",taskControllers.updateTask);
app.delete("/tasks/:id",taskControllers.deleteTask);


app.listen(process.env.PORT,() =>{
    console.log("Server is running on",process.env.PORT);
})


app.get("/:id",(req,res)=>{
    res.status(200).json({
        message:"hello",
        id:req.params.id
    })
})

app.post("/",(req,res) =>{
    res.status(200).json(req.body)
})

mongoose.connect("mongodb+srv://anu:E1GT8LG8KcW5h0Sf@cluster0.r8wbybs.mongodb.net/")
    .then(() =>{
        console.log("db connected")
    }).catch((err)=> {
        console.log(err)
    });


// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("Hello World");
// })

// server.listen(process.env.PORT,() =>{
//     console.log("Server is running on",process.env.PORT);
// })




