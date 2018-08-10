var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server.js');
var UserModel = mongoose.model('UserModel', UserSchema);



UserModel.createUser = createUser;
function createUser(user){
	return UserModel.create(user);
}


UserModel.findUsers = findUsers;
function findUsers() {
	return UserModel.find();
}


UserModel.findUserById = findUserById;
function findUserById(uid){
	return UserModel.findById(uid);
}


UserModel.findUser2ById = findUser2ById;//
function findUser2ById(uid2){//
	return UserModel.findById(uid2);//
}


UserModel.findUserByUsername = findUserByUsername;
function findUserByUsername(username){
	return UserModel.findOne({username: username});
}


UserModel.findUserByCredentials = findUserByCredentials;
function findUserByCredentials(username, password){
	return UserModel.findOne({username: username, password: password});
}


UserModel.updateUser = updateUser;
function updateUser(uid, user){
	return UserModel.update({_id: uid}, user);
}


UserModel.deleteUser = deleteUser;
function deleteUser(uid){
	return UserModel.remove({_id: uid});
}


module.exports = UserModel;