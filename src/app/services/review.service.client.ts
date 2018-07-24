import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { SharedService } from './shared.service.client';

// injecting service into module
@Injectable()

export class ReviewService {

constructor() { }

reviews = [
	{_id: "123", reviewerId: "456", targetReviewId: "789", posted:"Aug 2, 2018", like:"5", shared:"7"},
	{_id: "123", reviewerId: "754", targetReviewId: "175", posted:"Aug 3, 2018", like:"1", shared:"2"},
	];



}