module.exports = function(app){

	const reviewModel = require('../models/review/review.model.server');
	
	// var reviews = [
	// {_id: "123", reviewerId: "5b6e1e9f4e7912e94e13b330", reviewerUsername: "hi", reviewerImage:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", reviewerBadge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", reviewerBcount:"19 badges", targetReviewId: "5b6e1ed44e7912e94e13b332", rating: "2", posted:"Aug 2, 2018", comments: "hello", cost:"$50k-$80k", like:"5", shared:"7"},
	// {_id: "123", reviewerId: "5b6e1e854e7912e94e13b32f", reviewerUsername: "shiyu", reviewerImage:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", reviewerBadge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", reviewerBcount:"2 badges", targetReviewId: "5b6e1ed44e7912e94e13b332", rating: "2", posted:"Aug 3, 2018", comments: "hello", cost:"$50k-$80k", like:"1", shared:"2"},
	// ];


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