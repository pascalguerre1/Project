import { Component, OnInit } from '@angular/core';
import { SharedService} from '../../../../services/shared.service.client'
declare var $: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  areas = [
            {name: "Admiralty (Maritime) Law"},
            {name: "Bankruptcy Law"},
            {name: "Business (Corporate) Law"},
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
  areaValue = null;

  selectedValue = null;

  areaselect(selectedValue){
   if(!this.selectedValue) {
     this.sharedService.practiceAreas.push(selectedValue);
     this.selectedValue = selectedValue;
   } else {
     const index = this.sharedService.practiceAreas.indexOf(this.selectedValue);
     this.sharedService.practiceAreas.splice(index, 1);
     this.sharedService.practiceAreas.push(selectedValue);
     this.selectedValue = selectedValue;
   }
   console.log(this.sharedService.practiceAreas);
 }


	constructor(private sharedService: SharedService){}

  	_ref:any;

  	removeArea(){
      var numItems = $('.maxArea').length
      if (numItems <= 2) {this.sharedService.maxAreaError = false;}
      const index = this.sharedService.practiceAreas.indexOf(this.selectedValue);
      this.sharedService.practiceAreas.splice(index, 1);
  		this._ref.destroy();
      console.log(this.sharedService.practiceAreas);
      }
 	
}
