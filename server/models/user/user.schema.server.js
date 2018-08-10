var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	email: String,
	image: String,
	badge:String,
	bio: String,
	bcount: String,
	office: String,
	address: String,
	city: String,
	state: String,
	phone: String,
	site: String,
	gender: String,
	selectedValues:[],
	role:{type: String, default: 'user', enum:['user', 'attn', 'admin']},
	dateCreated: {type: Date, default: Date.now}
}, {collection:'user'})

module.exports = UserSchema;
