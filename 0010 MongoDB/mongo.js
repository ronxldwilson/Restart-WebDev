const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://ronaldwilson00000:5lK3Lb3Q2jdBxBwe@cluster0.8sisn.mongodb.net/Something_New_App?retryWrites=true&w=majority&appName=Cluster0');

const table = mongoose.model('table',{
    name: String,
    email: String,
    password: String
});
 
const entry = new table({
    name: "Ron",
    email: "ron@gmail.com",
    password: '12345'
})  
entry.save();

