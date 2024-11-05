const express = require('express')
const app = express()
const userRouter = require('./userRouter')
const port = 3000

app.use('/users',userRouter);


app.listen(3000)
