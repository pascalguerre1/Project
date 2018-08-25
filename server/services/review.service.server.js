module.exports = function(app){

	const reviewModel = require('../models/review/review.model.server');
	

	// app.get('/api/user/:uid/review', findAllReviewsForUser);
	// app.get('/api/review/:rid', findReviewById);
	// app.put('/api/review/:rid', updateReview);

	// create review
	app.post('/api/user/:uid/reviews/:uid2', createReview);
	function createReview(req, res){
		var review = req.body;
		reviewModel.createReviewForUser(review).then(
			(data) => {
				res.json(data);
			}
		)
	}
	// find reviews for user2
	app.get('/api/user/reviews/:uid2', findAllReviewsForUser2);//path to run function
	function findAllReviewsForUser2(req, res){
		var uid2 = req.params['uid2'];
		reviewModel.findAllReviewsForUser2(uid2).then(
			data => {
				res.json(data);
			}
		)
	}

	// find reviews for user
	app.get('/api/user/:uid/reviews', findAllReviewsForUser);//path to run function
	function findAllReviewsForUser(req, res){
		var uid = req.params['uid'];
		reviewModel.findAllReviewsForUser(uid).then(
			data => {
				res.json(data);
			}
		)
	}	

	// function findAllReviewsForUser(req, res){
	// 	var uid = req.params['uid'];
	// 	reviewModel.findAllReviewsForUser(uid).then(
	// 		(reviews)=>{
	// 			res.json(reviews);
	// 		}
	// 	);
	// }

	// function findReviewById(req, res){
	// 	var wid = req.params['wid']
	// 	reviewModel.findReviewById(wid).then(
	// 		(review) => {
	// 			res.json(review);
	// 		}
	// 	);
	// }

	// function updateReview(req, res){
	// 	var rid = req.params['wid'];
	// 	var review = req.body;
	// 	reviewModel.updateReview(rid, review).then(
	// 		data => {
	// 			res.json(data);
	// 		}
	// 	);	
	// }

	app.delete('/api/review/:rid', deleteReview);
	function deleteReview(req, res){
		var rid = req.params['rid'];
		reviewModel.deleteReview(rid).then(
			data => {
				res.json(data);
			}
		)
	}

}