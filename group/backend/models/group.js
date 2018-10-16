import mongoose from "mongoose";

// build module of group
const Schema = mongoose.Schema;

let Group = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  status: {
    type: String,
    default: "Available"
  }
});

export default mongoose.model("Group", Group);
