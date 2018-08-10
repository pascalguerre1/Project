import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ReviewService } from '../../services/review.service.client';
import { ActivatedRoute, Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client';
import { Review } from '../../models/review.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

@ViewChild('f') reviewForm: NgForm;

  uid2:string;//
  user2: User;//

	uid: string;
  user: User;
  reviews: Review[];


     resp = [
          {name: "Poor", value: "Poor"},
          {name: "Good", value: "Good"},
          {name: "Great", value: "Great"},
    ];
   responsivenessValue = null;

     costs = [
          {name: "under $5K", value: "under $5K"},
          {name: "$5K-$10K", value: "$5K-$10K"},
          {name: "$10K-$15K", value: "$10K-$15K"},
          {name: "$15K-$20K", value: "$15K-$20K"},
          {name: "$20K-$25K", value: "$20K-$25K"},
          {name: "$25K-$30K", value: "$25K-$30K"},
          {name: "$30K-$50K", value: "$30K-$50K"},
          {name: "over $50K", value: "over $50K"},                       
    ];
   costValue = null;


  constructor(private router: Router, private reviewService: ReviewService, private userService: UserService, 
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.uid = params['uid'];
    this.uid2 =params['uid2']//
    this.userService.findUserById(this.uid).subscribe(
      (user:User)=>{
        this.user = user;
        console.log(this.user)
      }
    )

    this.userService.findUser2ById(this.uid2).subscribe(//
      (user2:User)=>{//
        this.user2 = user2;//
      }//
    )//

    this.reviewService.findReviewByUser2(this.uid2).subscribe(
      (reviews:Review[])=>{
        this.reviews = reviews;
        console.log(this.reviews)
      }
    )

    });
  }


starList: boolean[] = [true,true,true,true,true];    // create a list which contains status of 5 stars
rating:number;  
//Create a function which receives the value counting of stars click, and according to that value we do change the value of that star in list.
setStar(data:any){
      this.rating=data+1;                               
      for(var i=0;i<=4;i++){  
        if(i<=data){  
          this.starList[i]=false;  
        }  
        else{  
          this.starList[i]=true;  
        }  
     } 
 }


comments: string;
cost: string;
responsiveness: string;

 create(){
  this.comments = this.reviewForm.value.comments;
  this.cost = this.reviewForm.value.cost;
  this.responsiveness = this.reviewForm.value.responsiveness;

  const newReview: Review = {
    rating: this.rating,
    reviewerId: this.uid,
    targetReviewId: this.uid2,
    cost: this.cost,
    comments: this.comments,
  };
  console.log(newReview)
  this.reviewService.createReview(this.uid, this.uid2, newReview).subscribe(
    (review: Review) =>{
      this.router.navigate(['user', this.uid, 'reviews', this.uid2]) //will combine it to user/123/reviews/555
    }
  )
}

}