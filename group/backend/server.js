import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Group from "./models/group";

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// connect port of mongoose
mongoose.connect(
  "mongodb://localhost:27017/database",
  { useNewUrlParser: true }
);

// connect with db
const connection = mongoose.connection;

// set log message once connected
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

router.route("/groups").get((req, res) => {
  // send request to database about error
  Group.find((err, groups) => {
    if (err) console.log(err);
    else res.json(groups);
  });
});

// view speific group's information by typing its id
router.route("/groups/:id").get((req, res) => {
  Group.findById(req.params.id, (err, group) => {
    if (err) console.log(err);
    else res.json(group);
  });
});

// add
router.route("/groups/add").post((req, res) => {
  let group = new Group(req.body);
  group
    .save()
    .then(group => {
      res.status(200).json("Added");
    })
    .catch(err => {
      res.status(400).send("Failed to create");
    });
});

// update
router.route("/groups/update/:id").post((req, res) => {
  Group.findById(req.params.id, (err, group) => {
    if (!group) return next(new Error("Could not load"));
    else {
      group.title = req.body.title;
      group.description = req.body.description;
      group.category = req.body.category;
      group.status = req.body.status;

      // save the updated item
      group
        .save()
        .then(group => {
          res.json("Updated");
        })
        .catch(err => {
          res.status(400).send("Update failed");
        });
    }
  });
});

// delete
router.route("/groups/delete/:id").get((req, res) => {
  Group.findByIdAndRemove({ _id: req.params.id }, (err, group) => {
    if (err) res.json(err);
    else res.json("Removed");
  });
});

// set middleware
app.use("/", router);

// run on port and log message
app.listen(4000, () => console.log("Running on port 4000"));
