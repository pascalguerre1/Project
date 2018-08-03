import { Component, OnInit, } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  uid: string;
  user: User;

  firstName="";
  lastName="";
  city="";
  state="";
  
  constructor(private userService: UserService, 
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.uid = params['uid'];
    this.userService.findUser2(this.user).subscribe(
      (user:User)=>{
        this.user = user;//the list of all user2
        console.log(this.user)
      }
    )
    });
  }

   user2 = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice1", lastName: "Wonder", email: "alice@gmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"18 badges", office:"Hello", address:"123 fake st", city:"aoston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"4 badges", office:"Hello", address:"456 fakes st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"14 badges", office:"Hello", address:"789 fakess st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
    {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"2 badges", office:"Hello", address:"489 fakesss st", city:"coston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
    {_id: "789", username: "hi", password: "hi", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"19 badges", office:"Hello", address:"415 fakem st", city:"doston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
  ];

}
