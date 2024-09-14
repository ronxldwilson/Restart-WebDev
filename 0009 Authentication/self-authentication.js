const express = require('express');
const jwt = require('jsonwebtokens');
const jwtPassword = '123456';

const app = express();

const All_USERS = [
    {
        username: "ron@gmail.com",
        password: "1234",
        name:"ron"
    },
    {
        username:"don@gmail.com",
        password:"2345",
        name:"don",
    },
    {
        username:"hello@gmail.com",
        password:"3456",
        name:"hello",
    }
];

app.use(express.json());

//Middleware to see if the user exists
function userExists(req,res,next){
    const username = req.body.username;
    const password = req.body.password;
    let flag = false;
    for(let i = 0;i<All_USERS.length; i++){
        if(username === All_USERS[i].username){
            if(password === All_USERS[i].password){
                flag = true;
                break;
            }
        }
    }

    if(!flag){
        res.staus(403).json({
            msg: "User doesn't Exist";
        })
    }
    else 
        next();
}

app.post('/',userExists, (req,res,next)=>{
    let token = jwt.sign()
});

app.use('/',(err,req,res,next)=>{
    res.send("Something went wrong");
})
    
app.listen(3000);