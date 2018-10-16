const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const port = 3000;
const cors = require("cors");
var database;
var users;
var newUsr;
var url = "mongodb://localhost:27017/database";

var bcrypt = require("bcrypt");
const saltRounds = 10;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

MongoClient.connect(
  url,
  function(err, db) {
    if (err) throw err;
    database = db.db("database");
    users = database.collection("users");
    groups = database.collection("groups");
    console.log("'users' Collection connected");
  }
);

//routing part

app.post("/addUser", (req, response) => {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    req.body.password = hash;
    let newUser = {
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      age: req.body.age
    };
    users.findOne({ username: req.body.username }).then(function(result) {
      if (null == result) {
        users.insertOne(newUser, function(err, res) {
          if (err) throw err;
          response.send(res);
        });
      } else {
        response.send("Already has this username");
      }
    });
  });
});

app.post("/loginUser", (req, response) => {
  users
    .findOne({
      username: req.body.username
    })
    .then(function(user) {
      if (user != null) {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (result == true) {
            response.send(user);
          }
        });
      } else if (user == null) {
        res.send(usr);
      }
    });
});
//add a group
app.post("/addGroup", (req, res) => {
  let newGrp = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status
  };
  groups.insertOne(newGrp, function(err, res) {
    if (err) throw err;
  });
  res.send("successfully!");
});

app.listen(port, () => console.log("Example app listening on port 3000!"));
