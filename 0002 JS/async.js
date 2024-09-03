const fs = require("fs");

function readThisFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve(data);
        })
    });
}

async function onDone(){
    const p = await readThisFile();
    console.log(p);
}

onDone();
