import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client';
import { SharedService } from '../../services/shared.service.client';
import { ReviewService } from '../../services/review.service.client';
import { Review } from '../../models/review.model.client';
import { DOCUMENT } from '@angular/common';
import { NgForm } from '@angular/forms';
declare var $: any


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user:User;
  user2: User[];
  filterCity: string;
  filterState: string;
  uid2:string;
  reviews: Review[];

  count0star:number;
  count1star:number;
  count2star:number;  
  count3star:number;
  count4star:number;
  count5star:number;
  potentialRating:number;
  overallRating:number;

  user2FilterCount: any;
  filterCount: any;

  constructor(@Inject(DOCUMENT) document, private reviewService: ReviewService, private userService: UserService, 
  	private activatedRoute: ActivatedRoute,
    public sharedService: SharedService) { 
  }

onChange(inputValue) {
  this.sharedService.uptadeFilterCount();
}

selectRating(){
  this.sharedService.uptadeFilterCount();
  this.sharedService.clearRating();
}

clearAll(){
  this.sharedService.item.name = "";
  this.sharedService.item.city = "";
  this.sharedService.item.state = "";
  this.sharedService.item.area = "";
  this.sharedService.clearRating();
  this.sharedService.uptadeFilterCount();
}

  ngOnInit() {
    this.user = this.sharedService.user;
    var item = this.sharedService.item;
    this.activatedRoute.params.subscribe(params => {
    this.userService.findUser2().subscribe(
      (user2:User[])=>{
        this.user2 = user2;//the list of all user2
        for (let x=0; x<this.user2.length; x++){
          this.reviewService.findReviewByUser2(this.user2[x]._id).subscribe(
            (reviews:Review[])=>{
              this.user2[x].reviewCount = reviews.length;
              this.reviews = reviews;
              for (let i=0; i<this.reviews.length; i++){//to get the count for each rating
                if(reviews[i].rating === 1){
                  this.user2[x].count1star = this.reviews.filter((obj) => obj.rating === reviews[i].rating).length
                }
                if(reviews[i].rating === 2){
                  this.user2[x].count2star = this.reviews.filter((obj) => obj.rating === reviews[i].rating).length
                }
                if(reviews[i].rating === 3){
                  this.user2[x].count3star = this.reviews.filter((obj) => obj.rating === reviews[i].rating).length
                }
                if(reviews[i].rating === 4){
                  this.user2[x].count4star = this.reviews.filter((obj) => obj.rating === reviews[i].rating).length
                }
                if(reviews[i].rating === 5){
                  this.user2[x].count5star = this.reviews.filter((obj) => obj.rating === reviews[i].rating).length
                }
              }
              // if there's no stars  chhange the count to 0 to allow overrating calculation
              if (!this.user2[x].count1star){
                this.user2[x].count1star = 0
              }
              if (!this.user2[x].count2star){
                this.user2[x].count2star = 0
              }
              if (!this.user2[x].count3star){
                this.user2[x].count3star = 0
              }
              if (!this.user2[x].count4star){
                this.user2[x].count4star = 0
              }
              if (!this.user2[x].count5star){
                this.user2[x].count5star = 0
              }
              if(this.user2[x].reviewCount !==0){//calculating overall rating
                this.potentialRating = this.user2[x].reviewCount*5
                this.overallRating = Math.round(((this.user2[x].count1star*1 + this.user2[x].count2star*2 + this.user2[x].count3star*3 + this.user2[x].count4star*4 + this.user2[x].count5star*5)*5)/this.potentialRating)
              } else {
                this.overallRating = 0
              }
              this.user2[x].overallRating = this.overallRating;

            }
          )
        }
      }
    )
   });
  this.sharedService.uptadeFilterCount();
  }

}
