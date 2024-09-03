const fs = require("fs");

function readThisFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve(data);
        });
    });
}

function onDone(data){
    console.log(data);
}

let a = readThisFile();
console.log(a);

setTimeout(()=>{
    console.log(a);
},1000);

a.then(onDone);

setTimeout(()=>{
    console.log(a);
},300);




