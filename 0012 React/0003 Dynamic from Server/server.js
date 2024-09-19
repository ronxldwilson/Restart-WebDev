const express = require("express");
const port = 3000;
const cors = require("cors");
const app = express();

app.use(cors());

const array = [{
	title: "Item 1",
	description: "Desc 1",
	id: 1
},{
	title: "Item 2",
	description: "Desc 2",
	id: 2
}];

app.get('/', (req, res) => {
	res.json({ todos: array }); // Send a proper JSON response with a key like "todos"
});

app.listen(port);


