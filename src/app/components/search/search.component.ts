import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  uid: string;
  user: User;

  constructor(private userService: UserService, 
  	private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  	this.uid = params['uid'];
  	this.user = this.userService.findUserById(this.uid);
  	});
  }

}
