const e = require("express");
const express = require("express");
const port = 3000;
const app = express();

//Middlewares
function checkUser(req, res, next){
    const name = req.query.name;
    if(name !== "Ron"){
        res.send("You are not Allowed");
    }
    else {
        next();
    }
}

function checkLength(req, res, next){
    const name = req.query.name;
    const length = name.length;
    if(length !==3){
        res.send("something went wrong");
    }
    else
        next();
}

app.get('/', checkUser, checkLength, (req,res)=>{
    res.send("It's All Good");
})

app.listen(port);