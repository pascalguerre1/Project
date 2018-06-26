import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
	
	constructor(){}

  	_ref:any;

  	removeArea(){
  		this._ref.destroy();
  	}
  	
}
