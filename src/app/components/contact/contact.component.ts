import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service.client';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }


  regs(){
    this.sharedService.attorneyRegs = false;
  }
}
