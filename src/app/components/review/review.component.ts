import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ReviewService } from '../../services/review.service.client';
import { ActivatedRoute, Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client';
import { Review } from '../../models/review.model.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../services/shared.service.client';
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

@ViewChild('f') reviewForm: NgForm;


	uid: string;
  user: User;

  uid2:string;
  user2: User;

  anonymousUser: boolean;
  reviews: Review[];

  count0star:number;
  count1star:number;
  count2star:number;  
  count3star:number;
  count4star:number;
  count5star:number;
  potentialRating:number;
  overallRating:number;

  attn:User;

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


  constructor(public sharedService: SharedService, private router: Router, private reviewService: ReviewService, private userService: UserService, 
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if(!this.user){
      this.anonymousUser = true;
    } else {
      this.anonymousUser = false;
    }
    this.activatedRoute.params.subscribe(params => {
      this.uid2 =params['uid2'];
      this.userService.findUser2ById(this.uid2).subscribe(
        (user2:User)=>{
          this.user2 = user2;
        }
      )

      this.reviewService.findReviewByUser2(this.uid2).subscribe(
        (reviews:Review[])=>{
          this.reviews = reviews;
        for (let x=0; x<this.reviews.length; x++){//to get the count for each rating
          if(reviews[x].rating === 1){
            this.count1star = this.reviews.filter((obj) => obj.rating === reviews[x].rating).length
          }
          if(reviews[x].rating === 2){
            this.count2star = this.reviews.filter((obj) => obj.rating === reviews[x].rating).length
          }
          if(reviews[x].rating === 3){
            this.count3star = this.reviews.filter((obj) => obj.rating === reviews[x].rating).length
          }
          if(reviews[x].rating === 4){
            this.count4star = this.reviews.filter((obj) => obj.rating === reviews[x].rating).length
          }
          if(reviews[x].rating === 5){
            this.count5star = this.reviews.filter((obj) => obj.rating === reviews[x].rating).length
          }
        }
        // if there's no stars  chhange the count to 0 to allow overrating calculation
        if (!this.count1star){
          this.count1star = 0
        }
        if (!this.count2star){
          this.count2star = 0
        }
        if (!this.count3star){
          this.count3star = 0
        }
        if (!this.count4star){
          this.count4star = 0
        }
        if (!this.count5star){
          this.count5star = 0
        }
        if(this.reviews.length !==0){//calculating overall rating
          this.potentialRating = this.reviews.length*5
          this.overallRating = Math.round(((this.count1star*1 + this.count2star*2 + this.count3star*3 + this.count4star*4 + this.count5star*5)*5)/this.potentialRating)
        } else {
          this.overallRating = 0
        }
        },
      )
      this.update();
    });
  }


starList: boolean[] = [true,true,true,true,true];    // create a list which contains status of 5 stars
rating:number;  
setStar(data:any){   //Create a function which receives the value counting of stars click, and according to that value we do change the value of that star in list.
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
  if(this.comments && this.cost && this.responsiveness && this.rating){ //to validate the modal form
  const newReview: Review = {
    rating: this.rating,
    reviewerId: this.user._id,
    reviewerUsername: this.user.username,
    reviewerImage: this.user.image,
    reviewerBadge: this.user.badge,
    reviewerBcount: this.user.bcount,
    targetReviewId: this.uid2,
    cost: this.cost,
    responsiveness: this.responsiveness,
    comments: this.comments,
    posted: new Date(Date.now()).toLocaleDateString()+' '+new Date(Date.now()).toLocaleTimeString()
  };
  this.reviewService.createReview(this.user._id, this.uid2, newReview).subscribe(
    (review: Review) =>{
      jQuery('#reviewModal').modal('hide');
      this.ngOnInit();// update the overall rating for user2
    }
  )}else{
    alert('Some fields are still missing')
  }
}


  update() {
    this.user2.overallRating = this.overallRating;
    this.userService.updateUser(this.user2._id, this.user2).subscribe(
      (user2: User) => {
        this.router.navigateByUrl('/about', {skipLocationChange: true}).then(()=>
        this.router.navigate(['user/reviews/', this.user2._id]));
      }
    );
  }

selectedReview:string;
  select(review: Review) {
    this.selectedReview = review._id
  }

    remove() {
      this.reviewService.deleteReview(this.selectedReview).subscribe(
          (res: any) => {
              jQuery('#removeModal').modal('hide');
              this.ngOnInit();
          }
      )
  }

toggle(){
  $("#panel").slideToggle("fast");
}

}