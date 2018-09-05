const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mongo =require('mongodb')
const MongoClient =mongo.MongoClient;
const port = 3000;
var database;
var users;
var url = "mongodb://localhost:27017/database";

var bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
         database= db.db("database");
         users=database.collection('users');
    console.log("'users' Collection connected");
});


//routing part
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view/index.html");
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/view/register.html");
});


app.get('/login',function(req,res){
    res.sendFile(__dirname + "/view/login.html");
});

app.post('/addUser', (req, response) => {

    bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
        req.body.password = hash;
            let newUser = { username: req.body.username, password: req.body.password };
         users.insertOne(newUser, function(err, res) {
        if (err) throw err;

    });
        });
    response.send('save');


});



app.post('/loginUser',(req, response) => {

    users.findOne(
        {
        username:req.body.username
        }
    ).then( function (user) {
            if(user!=null) {
                bcrypt.compare(req.body.password, user.password, function (err, result) {

                    if (result == true) {
                        response.send('login');
                    }
                    else {
                        response.send('invalid input');
                        response.redirect('/');
                    }
                });
            }});








});


app.listen(port, () => console.log('Example app listening on port 3000!'))