import { Component, OnInit, Inject, Output,EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedService } from '../../services/shared.service.client';
declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  attorneyRegs: boolean;


  constructor(@Inject(DOCUMENT) document, public sharedService: SharedService) { }

  ngOnInit() {
  }

  attRegs(){
  	this.sharedService.attorneyRegs = true;
  }

  regs(){
  	this.sharedService.attorneyRegs = false;
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}


}
