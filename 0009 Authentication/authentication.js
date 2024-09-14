const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

app.use(express.json());

function userExists(username, password) {
    let flag = false;
    for(let i = 0; i < ALL_USERS.length; i++){
        if(username === ALL_USERS[i].username){
            if(password === ALL_USERS[i].password){
                flag = true;
                break;
            }
        }
    }

    if(!flag)
        return flag;
    else 
        return flag;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    // res.send("Hello World");                                                             ````
    
    const displayUsers = ALL_USERS.filter((i)=>{ if(i.username !== username) return true; else return false});
    res.send(displayUsers);
    
    res.body.json({
        msg: "Success"
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)