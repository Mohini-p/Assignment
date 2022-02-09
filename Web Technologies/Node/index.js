const exp = require('constants');
const express = require('express');
const { use } = require('express/lib/application');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello! Annyong!");
})

app.get("/api/users/",(req,res)=>{
    res.sendFile(__dirname+"/user.json");
})

app.post("/api/users/",(req,res)=>{
const rfile = fs.readFileSync('user.json');
const myObj = JSON.parse(rfile);
 myObj.push(req.body);
 const jsonData = JSON.stringify(myObj, null , 2);
 fs.writeFile('user.json', jsonData ,() =>{
    console.log("done");
    });
    res.status(200).send("User added successfully!");
})

app.get("/api/users/:id",(req,res)=>{
    const rfile = fs.readFileSync('./user.json');
    const objData = JSON.parse(rfile);
    const user = objData.find(user => (user.id === parseInt(req.params.id)));
    res.send(user);
})

app.put("/api/users/:id",(req,res)=>{
    const rfile = fs.readFileSync('./user.json');
    const objData = JSON.parse(rfile);
    const user = objData.findIndex(user => (user.id === parseInt(req.params.id)));
    objData[user]=req.body;
    const jsonData = JSON.stringify(objData, null , 2);
    fs.writeFile('user.json', jsonData ,() =>{
    console.log("done");
    });
    res.status(200).send("User updated successfully!");
})

app.delete("/api/users/:id",(req,res)=>{
    const rfile = fs.readFileSync('./user.json');
    const objData = JSON.parse(rfile);
    const user = objData.findIndex(user => (user.id === parseInt(req.params.id)));
    objData.splice(user,1);
    const jsonData = JSON.stringify(objData, null , 2);
    fs.writeFile('user.json', jsonData ,() =>{
    console.log("delete done");
    });
    res.status(200).send("User Deleted successfully!");
})

app.listen(8000, ()=>{
    console.log("listening to port 8000");
});

