

var mongoose = require('mongoose');

var ReviewSchema = mongoose.Schema({
	_id: String,
	reviewerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
	targetReviewId: String,
	rating:Number,
	comments: String,
	cost: String,
	like: String,
	shared: String,
	posted: {type: Date, default: Date.now},
}, {collection:'review'})

module.exports = ReviewSchema;