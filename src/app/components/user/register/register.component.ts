import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	area: boolean;

  constructor() { }

  ngOnInit() {
  	// this.area = false;
  }

  addArea(){
  	// this.area = true;
  	var currArea = document.querySelector('#addToArea'); // select the div to include new field
	var tempNode = <HTMLElement>document.querySelector("div[data-type='template']").cloneNode(true); //clone the template field
	tempNode.style.display = ""; // makes the new field visible
	currArea.appendChild(tempNode); // append the new field to the div
	console.log(tempNode)
  }

  removeArea(){
  	// this.area = false;
  	console.log('hello');
  	// var areaList = document.querySelector('#addToArea')
  	// 	if(e.target.classList.contains('delete-btn')){
			// var area = e.target.parentNode.parentNode.parentNode;
			// areaList.removeChild(area);
  	// 	}
  }

  register(){}

}
