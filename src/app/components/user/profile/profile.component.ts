import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { ActivatedRoute, Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../../models/user.model.client'
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { SharedService } from '../../../services/shared.service.client';
import { ReviewService } from '../../../services/review.service.client';
import { Review } from '../../../models/review.model.client';
declare var jQuery: any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  baseUrl = environment.baseUrl;

    @ViewChild('f') profileForm: NgForm;

  states = [
          {name: "Alabama", value: "AL"},
          {name: "Alaska", value: "AK"},
          {name: "Arizona", value: "AZ"},
          {name: "Arkansas", value: "AR"},
          {name: "California", value: "CA"},
          {name: "Colorado", value: "CO"},
          {name: "Connecticut", value: "CT"},
          {name: "Delaware", value: "DE"},
          {name: "District Of Columbia", value: "DC"},
          {name: "Florida", value: "FL"},
          {name: "Georgia", value: "GA"},
          {name: "Hawaii", value: "HI"},
          {name: "Idaho", value: "ID"},
          {name: "Illinois", value: "IL"},
          {name: "Indiana", value: "IN"},
          {name: "Iowa", value: "IA"},
          {name: "Kansas", value: "KS"},
          {name: "Kentucky", value: "KY"},
          {name: "Louisiana", value: "LA"},
          {name: "Maine", value: "ME"},
          {name: "Maryland", value: "MD"},
          {name: "Massachusetts", value: "MA"},
          {name: "Michigan", value: "MI"},
          {name: "Minnesota", value: "MN"},
          {name: "Mississippi", value: "MS"},
          {name: "Missouri", value: "MO"},
          {name: "Montana", value: "MT"},
          {name: "Nebraska", value: "NE"},
          {name: "Nevada", value: "NV"},
          {name: "New Hampshire", value: "NH"},
          {name: "New Jersey", value: "NJ"},
          {name: "New Mexico", value: "NM"},
          {name: "New York", value: "NY"},
          {name: "North Carolina", value: "NC"},
          {name: "North Dakota", value: "ND"},
          {name: "Ohio", value: "OH"},
          {name: "Oklahoma", value: "OK"},
          {name: "Oregon", value: "OR"},
          {name: "Pennsylvania", value: "PA"},
          {name: "Rhode Island", value: "RI"},
          {name: "South Carolina", value: "SC"},
          {name: "South Dakota", value: "SD"},
          {name: "Tennessee", value: "TN"},
          {name: "Texas", value: "TX"},
          {name: "Utah", value: "UT"},
          {name: "Vermont", value: "VT"},
          {name: "Virginia", value: "VA"},
          {name: "Washington", value: "WA"},
          {name: "West Virginia", value: "WV"},
          {name: "Wisconsin", value: "WI"},
          {name: "Wyoming", value: "WY"},
   ];

  areas = [
        {name: "Admiralty (Maritime) Law"},
        {name: "Bankruptcy Law"},
        {name: "Business Law"},
        {name: "Civil Rights Law"},
        {name: "Criminal Law"},
        {name: "Entertainment Law"},
        {name: "Family Law"},
        {name: "Health Law"},
        {name: "Immigration Law"},
        {name: "Intellectual Property Law"},
        {name: "Labor (Employment) Law"},
        {name: "Military Law"},
        {name: "Personal Injury Law"},
        {name: "Real Estate Law"},           
        {name: "Tax Law"},  
   ]; 
  stateValue = null;
  area1Value = null;

  user: User;
  uid2:string;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  bio: string = "";
  reviews: Review[];

  constructor(private reviewService: ReviewService, public sharedService: SharedService, private router: Router, private userService: UserService, 
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userService.login(this.user.username, this.user.password).subscribe(
      (user: User) => { 
        this.sharedService.user = user;
        this.user = this.sharedService.user;      
      },
    )
    this.reviewService.findReviewByUser2(this.uid2).subscribe(
      (reviews:Review[])=>{
        this.reviews = reviews;
      }
    )
  }

    update() {
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;
    this.email = this.profileForm.value.email;
    this.bio = this.profileForm.value.bio;
    this.userService.updateUser(this.user._id, this.user).subscribe(
        (user: User) => {
          jQuery('#profileModal').modal('hide');
        }
    );
  }

}
