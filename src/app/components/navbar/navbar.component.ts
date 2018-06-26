import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service.client';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }

}
