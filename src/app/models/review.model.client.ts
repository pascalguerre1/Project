export class Review {
	_id?: string;
	reviewerId: string;
	targetReviewId: string;
	reviewerUsername: string;
	reviewerImage: string;
	reviewerBadge?: string;
	reviewerBcount?: number;
	rating:number;
	responsiveness?: string;
	comments: string;
	posted?: string;
	cost?: string;
	like?: string;
	shared?: string;

	constructor(_id, reviewerId, targetReviewId, posted) {
		this._id = _id;
		this.reviewerId = reviewerId;
		this.targetReviewId = targetReviewId;
		this.posted = posted;
	}
}