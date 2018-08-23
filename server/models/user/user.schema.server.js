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
	reviewCount:String,
	overallRating:Number,
    count1star:Number,
	count2star:Number,
	count3star:Number,
	count4star:Number,
	count5star:Number,
	selectedValues:[],
	role:{type: String, default: 'user', enum:['user', 'attn', 'admin']},
	dateCreated: String,
}, {collection:'user'})

module.exports = UserSchema;
