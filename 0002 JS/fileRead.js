const fs = require('fs');

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
});

for(let i=0;i<10000000000;i++){
    
}

console.log("Hello from the script")