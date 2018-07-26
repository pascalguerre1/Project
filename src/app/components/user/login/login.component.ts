import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service.client';
import { User } from '../../../models/user.model.client'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@ViewChild('f') loginForm: NgForm;

	username: string;
	password: string;
	errorFlag: boolean;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  regs(){
    this.sharedService.attorneyRegs = false;
  }

  login(){
  	this.username = this.loginForm.value.username;
  	this.password = this.loginForm.value.password;
  	this.userService.findUserByCredentials(this.username, this.password).subscribe(//'subscribe' waits for the function finduserbycredential to run then do the following 2 steps.
      (user: User) => { //if the response from the function is a user then run the code below
        this.errorFlag = false;
        this.sharedService.user = user;
        this.router.navigate(['/user/'+ user._id]);        
      },
      (error: any) =>{//if the response from the function is an error then run the code below
        this.errorFlag = true;
      }
    )
  }
  
}
