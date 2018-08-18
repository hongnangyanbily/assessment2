const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/simpleDB");
const nameSchema = new mongoose.Schema({
    username: {type:String,required:true},
    password: {type:String,required:true}
});
const users = mongoose.model("users", nameSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view/index.html");
});

app.get('/register.html', (req, res) => {
    res.sendFile(__dirname + "/view/register.html");
});
app.post('/addUser', (req, res) => {
    var newUser = new users(req.body);
    newUser.save()
        .then(item => {
            res.sendFile(__dirname + "/view/index.html");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


app.get('/showAll', (req, res) => {
    users.find(function (err,users) {
        res.send(users);

    });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});