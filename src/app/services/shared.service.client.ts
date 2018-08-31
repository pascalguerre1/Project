import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare var $: any

@Injectable()
export class SharedService {
   user: any;
   attorneyRegs: boolean;
   practiceAreas: any[] = [];
   maxAreaError: boolean;
   item: any = {// for user2 pipe
   	name: "",
   	city: "",
   	state:"",
   	area: "",
    fiveStar: undefined,
    fourStar: undefined,
    threeStar: undefined,
    twoStar: undefined,
    oneStar: undefined,
   };

   item1: any = {//for message pipe
     name: "",
     email: "",
     message:"",
   };

  clearRating(){// reset the rating after a search
    if(this.item.fiveStar){
      this.item.fiveStar=  undefined;
    }
    if(this.item.fourStar){
      this.item.fourStar=  undefined;
    }
    if(this.item.threeStar){
      this.item.threeStar=  undefined;
    }
    if(this.item.twoStar){
      this.item.twoStar=  undefined;
    }
    if(this.item.oneStar){
      this.item.oneStar=  undefined;
    }
  }


uptadeFilterCount(){
  $(document).ready(function(){
    try { 
      this.filterCount = document.getElementById("user2FilterCount").innerHTML;//if the result 0 there's an error. i use catch and try to handle it
    }
    catch(error){
      this.filterCount = 0;
    }
    document.getElementById("filterCount").innerHTML = this.filterCount;
  });  
}


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




}