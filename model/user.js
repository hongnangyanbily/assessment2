const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
    username: {type:String,required:true},
    password: {type:String,required:true}
});

const User = module.exports=mongoose.model("user", nameSchema);

//get users
module.exports.getAllUsers =function (callback) {
    User.find(callback);
};

//add user
module.exports.addUser =function (user,callback) {
    User.create(user,callback)
};
//login user
module.exports.login =function (user,callback){
    User.find(user,callback);
};

//Remove user
module.exports.delete=function (user,callback) {
    User.remove(user,callback);
};