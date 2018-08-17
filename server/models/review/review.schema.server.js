

var mongoose = require('mongoose');

var ReviewSchema = mongoose.Schema({
	reviewerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
	reviewerUsername: String,
	reviewerImage: String,
	reviewerBadge: String,
	reviewerBcount: String,
	targetReviewId: String,
	responsiveness: String,
	rating:Number,
	comments: String,
	cost: String,
	like: String,
	shared: String,
	posted: {type: Date, default: Date.now},
}, {collection:'review'})

module.exports = ReviewSchema;