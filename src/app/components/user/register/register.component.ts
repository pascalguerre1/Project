import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { User } from '../../../models/user.model.client'
import { SharedService } from '../../../services/shared.service.client';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
 })
export class RegisterComponent implements OnInit {

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
   stateValue = null;

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
   // area1Value = null;


  @ViewChild('parent', { read: ViewContainerRef })    container: ViewContainerRef;
  @ViewChild('f') registerForm: NgForm;
  
  user: User;

  firstName: string;
  lastName: string;
  radioData: string = '';
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  username: string;
  office: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  site: string;
  area1: string;
  emailError: boolean;
  passwordError: boolean;
  usernameError: boolean;

  attorneyRegs: boolean = false;


  selectedValues: any[];

  constructor(private _cfr: ComponentFactoryResolver, private userService: UserService, private router: Router, public sharedService: SharedService) { }

  ngOnInit() {
   this.sharedService.attorneyRegs = false; 
  }

  addArea(){
    var numItems = $('.maxArea').length
    if (numItems < 2) {
      this.sharedService.maxAreaError = false;
      var comp = this._cfr.resolveComponentFactory(TemplateComponent);// check and resolve the component
      var templateComponent = this.container.createComponent(comp);// Create component inside container
      templateComponent.instance._ref = templateComponent;}
      else { 
        this.sharedService.maxAreaError = true;
      }
  }

  attRegs(){
    this.sharedService.practiceAreas = [];
    this.sharedService.attorneyRegs = true;
  }

  register(){
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;
    this.radioData = this.registerForm.value.gender;
    this.email = this.registerForm.value.email;
    this.confirmEmail = this.registerForm.value.confirmEmail;
    this.password = this.registerForm.value.password;
    this.confirmPassword = this.registerForm.value.confirmPassword;
    this.username = this.registerForm.value.username;
    this.office = this.registerForm.value.office;
    this.address = this.registerForm.value.address;
    this.city = this.registerForm.value.city;
    this.state = this.registerForm.value.state;
    this.phone = this.registerForm.value.phone;
    this.site = this.registerForm.value.site;
    this.area1 = this.registerForm.value.area1;
    this.selectedValues = this.sharedService.practiceAreas;
    this.selectedValues.push(this.area1);

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
            const user = this.userService.findUserByUsername(this.username).subscribe(
              (user: any) => {
                  if (!user) {
                    if(this.sharedService.attorneyRegs === true){
                      const newUser: User = {
                        role:"attn",
                        username: this.username,
                        password: this.password,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,             
                        gender: this.radioData,
                        office: this.office,
                        address: this.address,
                        city: this.city,
                        state: this.state,
                        phone: this.phone,
                        site: this.site,
                        selectedValues: this.selectedValues,
                        image: './assets/uploads/avatar.png',
                        badge: './assets/uploads/badge.png',  
                      }; 

                      this.userService.createUser(newUser)
                      .subscribe(
                          (user: any) => {
                            this.emailError = false;
                            this.passwordError = false;
                            this.usernameError = false;
                            this.sharedService.user = user;
                            this.router.navigate(['user']); 
                            console.log(this.selectedValues)                              
                          });

                    } else {
                      const newUser: User = {
                        username: this.username,
                        password: this.password,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,             
                        gender: this.radioData,
                        office: this.office,
                        address: this.address,
                        city: this.city,
                        state: this.state,
                        phone: this.phone,
                        site: this.site,
                        selectedValues: this.selectedValues,
                        image: './assets/uploads/avatar.png',
                        badge: './assets/uploads/badge.png',  
                      };  

                      this.userService.createUser(newUser)
                      .subscribe(
                          (user: any) => {
                            this.emailError = false;
                            this.passwordError = false;
                            this.usernameError = false;
                            this.sharedService.user = user;
                            this.router.navigate(['user']);                               
                          });

                    }
                  } 
                  else {
                      this.usernameError = true;
                  }
              }
            )
          }
      }

  }

}
