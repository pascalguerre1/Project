

var mongoose = require('mongoose');
var ReviewSchema = require('./review.schema.server.js');
var ReviewModel = mongoose.model('ReviewModel', ReviewSchema);

ReviewModel.createReviewForUser = createReviewForUser;
ReviewModel.findAllReviewsForUser2 = findAllReviewsForUser2;
// ReviewModel.findReviewById = findReviewById;
// WebsiteModel.updateWebsite = updateWebsite;
// WebsiteModel.deleteWebsite = deleteWebsite;

function createReviewForUser(review){
	return ReviewModel.create(review);
}

function findAllReviewsForUser2(uid2){
	return ReviewModel.find({targetReviewId: uid2});
}

// function findReviewById(rid){
// 	return ReviewModel.findById(rid);
// }

// function updateWebsite(wid, website){
// 	return WebsiteModel.update({_id: wid}, website);
// }

// function deleteWebsite(wid){
// 	return WebsiteModel.remove({_id: wid});
// }

module.exports = ReviewModel;