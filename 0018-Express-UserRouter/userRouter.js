const express = require('express');
const userRouter = express.Router();

userRouter.get('/names', (req,res) => {
	res.send('Ron')
})



module.exports = userRouter;
