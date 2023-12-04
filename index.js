const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"views")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is working");
})

let posts=[
    {
        username : "kaleem",
        content  : " I love coding!",
    },
    {
        username : "saqlain",
        content  : " I love music!",
    },
    {
        username : "ansari",
        content : "Bisalpur is best city",
    },
];

app.get("/posts" (req,res)=>{
    
})

app.listen(port,()=>{
    console.log("Server is running at port 8080");
});