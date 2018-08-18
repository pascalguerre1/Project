var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
	name: String,
	email: String,
	message: String,
	dateCreated: String,
}, {collection:'message'})

module.exports = MessageSchema;