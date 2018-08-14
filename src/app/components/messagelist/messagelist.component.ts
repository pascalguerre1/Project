import { Component, OnInit, } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client';
import { SharedService } from '../../services/shared.service.client';
declare var jQuery: any;

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {

  user:User;
  users: User[];


  constructor(private userService: UserService, 
  	private activatedRoute: ActivatedRoute,
    public sharedService: SharedService) { 
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe(params => {
    this.userService.findAllUsers().subscribe(
      (users:User[])=>{
        this.users = users;
      }
    )
   });
  }

}
