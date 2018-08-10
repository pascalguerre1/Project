import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { ActivatedRoute, Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../../models/user.model.client'
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { SharedService } from '../../../services/shared.service.client';
declare var jQuery: any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    @ViewChild('f') profileForm: NgForm;
  
  uid: string;
  user: User;
  baseUrl: string = "";
  username: string;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  bio: string = "";

  constructor(public sharedService: SharedService, private router: Router, private userService: UserService, 
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
  	this.activatedRoute.params.subscribe(params => {
  	this.uid = params['uid'];
  	this.userService.findUserById(this.uid).subscribe(
      (user:User)=>{
        this.user = user;
      }
    )
  	});
  }

    update() {
    this.firstName = this.profileForm.value.firstName;
    this.lastName = this.profileForm.value.lastName;
    this.email = this.profileForm.value.email;
    this.bio = this.profileForm.value.bio;
    this.userService.updateUser(this.uid, this.user).subscribe(
        (user: User) => {
          jQuery('#profileModal').modal('hide');
        }
    );
  }

}
