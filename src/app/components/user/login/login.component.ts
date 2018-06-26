import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service.client';


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
  	var user = this.userService.findUserByCredentials(this.username, this.password);
  	if( user != undefined){
  		this.errorFlag = false;
      this.sharedService.user = user;
  		this.router.navigate(['/user/'+ user._id]);
  	} else {
  		this.errorFlag = true;
  	}
  }

}
