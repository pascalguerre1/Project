import { Component, OnInit, } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client'
import { SharedService } from '../../services/shared.service.client'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user:User;
  user2: User[];
  filterCity: string;
  filterState: string;

  constructor(private userService: UserService, 
  	private activatedRoute: ActivatedRoute,
    public sharedService: SharedService) { 
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    var item = this.sharedService.item;
    this.activatedRoute.params.subscribe(params => {
    this.userService.findUser2().subscribe(
      (user2:User[])=>{
        this.user2 = user2;//the list of all user2
      }
    )
   });
  }

}
