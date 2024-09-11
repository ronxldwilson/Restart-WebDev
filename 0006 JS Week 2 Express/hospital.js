const express = require("express");
const port = 3000;
const app = express();

const users = [
    {
        name:"Ron",
        kidneyCount:2,
        health:100
    },
    {
        name:"Don",
        kidneyCount:2,
        health:70
    },{
        name:"Frodo",
        kidneyCount:1,
        health:50
    }
];


app.use(express.json());

console.log(users[1].name);

app.get("/",(req,res)=>{
    const name = req.query.name;
    for(let i=0; i<users.length; i++){
        if(users[i].name === name){
            res.send("Your name is "+users[i].name+" and you have "+users[i].kidneyCount+"and its health is "+users[i].health);
        }
    }
});

app.post('/add-kidney',(req,res)=>{
    const name = req.body.name;
    for(let i=0; i<users.length; i++){
        if(users[i].name === name){
            users[i].kidneyCount++;
            res.send("Kidney added for "+name+"Now the kidney count is "+users[i].kidneyCount);
            res.json(users[i]);
        }
    }
})

app.put('/health-boost',(req,res)=>{
    const name = req.body.name;
    for(let i=0; i<users.length; i++){
        if(users[i].name === name){
            users[i].health = users[i].health+20;
            res.send("Kidney health imporved for "+name+" by "+users[i].health);
            res.json(users[i]);
        }
    }
})

app.delete('/delete',(req,res)=>{
    const name = req.query.name;
    for(let i=0; i<users.length; i++){
        if(users[i].name === name){
            users[i].kidneyCount++;
            res.send("Kidney added for "+name+"Now the kidney count is "+users[i].kidneyCount);
        }
    }
})

app.listen(port);