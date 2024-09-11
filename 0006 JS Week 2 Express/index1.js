const  express = require("express");
const app = express();

function sum(n){
    let total = 0;
    for(let i=0;i<=n;i++){
        total +=i;
    }
    return total;
}

app.get("/",(req, res)=>{
    const n = req.query.n;
    let su = sum(n);
    res.send("Total ="+ su);         
});


app.listen(3000);
