const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mongo =require('mongodb')
const MongoClient =mongo.MongoClient;
const port = 3000;
var database;
var users;
var url = "mongodb://localhost:27017/database";


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

app.post('/addUser', (req, res) => {
    let newUser = { username: req.body.username, password: req.body.password };
    users.insertOne(newUser, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");

    });
    res.send('save');
});

app.post('/addUser', (req, res) => {
    let newUser = { username: req.body.username, password: req.body.password };
    users.insertOne(newUser, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");

    });
    res.send('save');
});

app.post('/loginUser',(req, res) => {
    let newUser = { username: req.body.username, password: req.body.password };
    users.findOne({}, function(err, result) {
        if(err) throw err;

        if(result.username===req.body.username){
           if(result.password===req.body.password){
        res.json(result);
        }else
           {res.send('wrong password')}
        }else{
            res.send('no that account')
        }
    });

});
app.listen(port, () => console.log('Example app listening on port 3000!'))