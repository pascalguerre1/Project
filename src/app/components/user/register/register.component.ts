import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { User } from '../../../models/user.model.client'
import { SharedService } from '../../../services/shared.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
 })
export class RegisterComponent implements OnInit {

  @ViewChild('parent', { read: ViewContainerRef })    container: ViewContainerRef;
  @ViewChild('f') registerForm: NgForm;
  
  firstName: string;
  lastName: string;
  radioData: string = '';
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  username: string;
  // office: string;
  // address: string;
  // city: string;
  // state: string;
  // phone: string;
  // site: string;
  // area1: string;
  // area2: string;
  // area3: string;
  emailError: boolean;
  passwordError: boolean;
  usernameError: boolean;


  constructor(private _cfr: ComponentFactoryResolver, private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() { 
  }

  addArea(){
    var comp = this._cfr.resolveComponentFactory(TemplateComponent);// check and resolve the component
    var templateComponent = this.container.createComponent(comp);// Create component inside container
    templateComponent.instance._ref = templateComponent
  }

  register(){
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;
    this.radioData = this.registerForm.value.radioData;
    this.email = this.registerForm.value.email;
    this.confirmEmail = this.registerForm.value.confirmEmail;
    this.password = this.registerForm.value.password;
    this.confirmPassword = this.registerForm.value.confirmPassword;
    this.username = this.registerForm.value.username;
    // this.office = this.registerForm.value.office;
    // this.address = this.registerForm.value.address;
    // this.city = this.registerForm.value.city;
    // this.state = this.registerForm.value.state;
    // this.phone = this.registerForm.value.phone;
    // this.site = this.registerForm.value.site;
    // this.area1 = this.registerForm.value.area1;
    // this.area2 = this.registerForm.value.area2;
    // this.area3 = this.registerForm.value.area3;
    if (this.email !== this.confirmEmail){
      this.emailError = true;
      this.passwordError = false;
      this.usernameError =false;
    } else {
        if (this.password !== this.confirmPassword){
          this.passwordError = true;
          this.emailError = false;
          this.usernameError =false;
        } else {
            this.passwordError = false;
            const user = this.userService.findUserByUsername(this.username);
            if(user!=undefined){
              this.usernameError =true;
              this.emailError = false;
              this.passwordError = false;
            } else {
                this.emailError = false;
                this.passwordError = false;
                this.usernameError =false;
                const newUser = {
                  _id:"",
                  username: this.username,
                  password: this.password,
                  firstName: this.firstName,
                  lastName: this.lastName,
                  email: this.email,
                  radioData: this.radioData,
                  // office: this.office,
                  // address: this.address,
                  // city: this.city,
                  // state: this.state,
                  // phone: this.phone,
                  // site: this.site,
                  // area1: this.area1,
                  // area2: this.area2,
                  // area3: this.area3,
                };
                this.userService.createUser(newUser);
                console.log(this.userService.createUser(newUser))
                var id: string = this.userService.findUserByUsername(this.username)._id
                this.router.navigate(['user', id]);
              }
          }
      }
  }

}
