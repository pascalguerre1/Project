var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
	name: String,
	email: String,
	message: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection:'message'})

module.exports = MessageSchema;