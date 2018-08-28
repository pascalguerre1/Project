import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router} from '@angular/router';
import { SharedService } from '../../services/shared.service.client';
import { NgForm } from '@angular/forms';
declare var $: any

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})

export class SidenavbarComponent implements OnInit {

  @ViewChild('f') searchForm: NgForm;

  attorneyRegs: boolean;

  name: string ="";
  city: string ="";
  stateValue: string ="";
  area1Value: string ="";
  fiveStar: boolean =undefined;
  fourStar: boolean =undefined;
  threeStar: boolean =undefined;
  twoStar: boolean =undefined;
  oneStar: boolean =undefined;

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
 
  constructor(@Inject(DOCUMENT) document, public sharedService: SharedService, private router: Router) { }

  ngOnInit() {
  }

  attRegs(){
  	this.sharedService.attorneyRegs = true;
  }

  regs(){  
  	this.sharedService.attorneyRegs = false;
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  clearRating(){// reset the rating after a search
    if(this.fiveStar){
      this.fiveStar=  undefined;
    }
    if(this.fourStar){
      this.fourStar=  undefined;
    }
    if(this.threeStar){
      this.threeStar=  undefined;
    }
    if(this.twoStar){
      this.twoStar=  undefined;
    }
    if(this.oneStar){
      this.oneStar=  undefined;
    }
  }

  search() {
    const item = {
      name: this.name,
      city: this.city,
      state: this.stateValue,
      area: this.area1Value,
      fiveStar: this.fiveStar,
      fourStar: this.fourStar,
      threeStar: this.threeStar,
      twoStar: this.twoStar,
      oneStar: this.oneStar
    }
    this.sharedService.item = item;
    this.clearRating();
    this.closeNav();
    this.router.navigate(['/search']);
  }

}
