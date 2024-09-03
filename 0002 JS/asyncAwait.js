const { checkPrimeSync } = require('crypto');
const fs = require('fs');

function readThisFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve(data);
        });
    });
}

async function onDone(data) {
    const value = await readThisFile();
    console.log(value);
}

onDone();