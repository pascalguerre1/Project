import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router} from '@angular/router';
import { SharedService } from '../../services/shared.service.client';
declare var $: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

name: string;

  constructor(public sharedService: SharedService, private router: Router) { }

  ngOnInit() {
  	window.scrollTo(0, 0);
  }
  
  openNav() {
  	document.getElementById("mySidenav").style.width = "300px";
  }

    search() {
	    const item = {
	      name: this.name,
	    }
	    console.log(item)
	    this.sharedService.item = item;
	    this.router.navigate(['/search']);
    }
    perInj(){
	    var val = $('.perInj')[0].innerHTML;
	    const item = {
	      area: val,
	    }
	    this.sharedService.item = item;
	    this.router.navigate(['/search']);
    }
    realEst(){
	    var val = $('.realEst')[0].innerHTML;
	    const item = {
	      area: val,
	    }
	    this.sharedService.item = item;
	    this.router.navigate(['/search']);
    }
    tax(){
	    var val = $('.tax')[0].innerHTML;
	    const item = {
	      area: val,
	    }
	    this.sharedService.item = item;
	    this.router.navigate(['/search']);
    }
    bank(){
	    var val = $('.bank')[0].innerHTML;
	    const item = {
	      area: val,
	    }
	    this.sharedService.item = item;
	    this.router.navigate(['/search']);
    }
    crim(){
	    var val = $('.crim')[0].innerHTML;
	    const item = {
	      area: val,
	    }
	    this.sharedService.item = item;
	    this.router.navigate(['/search']);
    }
    imm(){
	    var val = $('.imm')[0].innerHTML;
	    const item = {
	      area: val,
	    }
	    this.sharedService.item = item;
	    this.router.navigate(['/search']);
    }
    bus(){
	    var val = $('.bus')[0].innerHTML;
	    const item = {
	      area: val,
	    }
	    this.sharedService.item = item;
	    this.router.navigate(['/search']);
    }
    fam(){
	    var val = $('.fam')[0].innerHTML;
	    const item = {
	      area: val,
	    }
	    this.sharedService.item = item;
	    this.router.navigate(['/search']);
    }
}
