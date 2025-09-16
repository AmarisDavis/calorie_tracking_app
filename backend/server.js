//stuff to set up the server 
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./db');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); //allows to make requests to other servers 

//checking server responsiveness 
app.get("/", (req,res) =>{
    res.send("The server is up!");
});

//logs if the server is up and running 
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    connectDB();
    console.log("Server is up and running at http://localhost:5000");
});