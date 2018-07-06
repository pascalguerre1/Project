import { Component, OnInit, } from '@angular/core';

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


	constructor(){}

  	_ref:any;

  	removeArea(){
  		this._ref.destroy();
  	}
  	
}
