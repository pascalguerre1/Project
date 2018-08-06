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

  uid: string;
  user: User;
  filterCity: string;
  filterState: string;

  constructor(private userService: UserService, 
  	private activatedRoute: ActivatedRoute,
    public sharedService: SharedService) { 
  }

  ngOnInit() {
    var item = this.sharedService.item
    console.log(item);
    this.activatedRoute.params.subscribe(params => {
    this.userService.findUser2().subscribe(
      (user:User)=>{
        this.user = user;//the list of all user2
      }
    )
   });
  }

}
