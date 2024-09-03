
const fs = require("fs");

function readThisFile(callback,path){
    fs.readFile(path,"utf-8",(err,data)=>{
        callback(data);
    });
}

function logThis(data){
    console.log(data);
}

readThisFile(logThis,"a.txt");

