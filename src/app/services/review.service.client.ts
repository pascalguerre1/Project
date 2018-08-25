import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { Review } from '../models/review.model.client';
import { SharedService } from './shared.service.client';
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class ReviewService {
  baseUrl = environment.baseUrl;

constructor(private http: Http) { }

  // adds the review
  createReview(userId: string, userId2:string, review: Review) {
    const url = this.baseUrl+'/api/user/'+userId+'/reviews/'+userId2; 
    return this.http.post(url, review).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))      
  }
// returns the review by user
  findReviewByUser(userId: string) {
    const url = this.baseUrl + '/api/user/'+userId+'/reviews'; 
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    )) 
   }

// returns the review by user2
  findReviewByUser2(userId2: string) {
    const url = this.baseUrl + '/api/user/reviews/'+userId2; 
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    )) 
   }

   // returns the review by id 
  findReviewById(reviewId: string) {
    const url = this.baseUrl+'/api/review/'+reviewId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))      
  }

// updates the review 
  updateReview(reviewId: string, review: Review) { 
    const url = this.baseUrl + '/api/review/'+ reviewId;
    return this.http.put(url, review).pipe(map(
      (response: Response) => {
        return response.json();
      }
     ))
   }

 // removes the review 
  deleteReview(reviewId: string) { 
    const url = this.baseUrl + '/api/review/'+ reviewId;
    return this.http.delete(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
     ))
   }

}