var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	email: String,
	image: String,
	bio: String,
	role:{type: String, default: 'user', enum:['user', 'user2', 'admin']},
	dateCreated: {type: Date, default: Date.now}
}, {collection:'user'})

module.exports = UserSchema;
