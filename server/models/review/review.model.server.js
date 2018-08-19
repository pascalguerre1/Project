var mongoose = require('mongoose');
var ReviewSchema = require('./review.schema.server.js');
var ReviewModel = mongoose.model('ReviewModel', ReviewSchema);



// ReviewModel.findReviewById = findReviewById;
// WebsiteModel.updateWebsite = updateWebsite;

ReviewModel.createReviewForUser = createReviewForUser;
function createReviewForUser(review){
	return ReviewModel.create(review);
}

ReviewModel.findAllReviewsForUser2 = findAllReviewsForUser2;
function findAllReviewsForUser2(uid2){
	return ReviewModel.find({targetReviewId: uid2});
}

// function findReviewById(rid){
// 	return ReviewModel.findById(rid);
// }

// function updateWebsite(wid, website){
// 	return WebsiteModel.update({_id: wid}, website);
// }

ReviewModel.deleteReview = deleteReview;
function deleteReview(rid){
	return ReviewModel.remove({_id: rid});
}

module.exports = ReviewModel;