const express = require("express");
const port = 3000;
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/sum',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString());
})

app.listen(port);