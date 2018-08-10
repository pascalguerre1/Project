module.exports = function(app){

	const reviewModel = require('../models/review/review.model.server');
	
	var reviews = [
	{_id: "123", reviewerId: "5b6d926e21d9e62ec835863c", targetReviewId: "5b6d92fc21d9e62ec8358641", rating: "2", posted:"Aug 2, 2018", comments: "hello", cost:"$50k-$80k", like:"5", shared:"7"},
	{_id: "123", reviewerId: "5b6d92a221d9e62ec835863d", targetReviewId: "5b6d92fc21d9e62ec8358641", rating: "2", posted:"Aug 3, 2018", comments: "hello", cost:"$50k-$80k", like:"1", shared:"2"},
	];


 //  	app.post('/api/user/:uid/review', createReview); 
	// app.get('/api/user/:uid/review', findAllReviewsForUser);
	// app.get('/api/review/:wid', findReviewById);
	// app.put('/api/review/:wid', updateReview);
	// app.delete('/api/review/:wid', deleteReview);

	app.post('/api/user/:uid/reviews/:uid2', createReview);
	function createReview(req, res){
		var review = req.body;
		reviewModel.createReviewForUser(review).then(
			(data) => {
				res.json(data);
			}
		)
	}



	// find user by given id
	app.get('/api/user/reviews/:uid2', findAllReviewsForUser2);//path to run function
	function findAllReviewsForUser2(req, res){
		var uid2 = req.params['uid2'];
		reviewModel.findAllReviewsForUser2(uid2).then(
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

	// function updateWebsite(req, res){
	// 	var wid = req.params['wid'];
	// 	var website = req.body;
	// 	websiteModel.updateWebsite(wid, website).then(
	// 		data => {
	// 			res.json(data);
	// 		}
	// 	);	
	// }

	// function deleteWebsite(req, res){
	// 	var wid = req.params['wid'];
	// 	websiteModel.deleteWebsite(wid).then(
	// 		data => {
	// 			res.json(data);
	// 		}
	// 	)
	// }

}