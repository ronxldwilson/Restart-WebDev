const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://ronaldwilson00000:5lK3Lb3Q2jdBxBwe@cluster0.8sisn.mongodb.net/Something_New_App?retryWrites=true&w=majority&appName=Cluster0');

const table = mongoose.model('table',{
    name: String,
    email: String,
    password: String
});

app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const entry = new table({
        name: username,
        email: email,
        password: password
    })  
    entry.save();
    // res.json("data saved")
    res.send("Data Saved Succesfully in the database")

});


app.listen(3000);