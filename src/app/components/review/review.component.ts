import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

	uid: string;
  user: User;


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


  constructor(private userService: UserService, 
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.uid = params['uid'];
    this.userService.findUserById(this.uid).subscribe(
      (user:User)=>{
        this.user = user;
      }
    )
    });
  }

}