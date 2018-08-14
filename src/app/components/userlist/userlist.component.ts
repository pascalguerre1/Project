import { Component, OnInit, } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client';
import { SharedService } from '../../services/shared.service.client';
declare var jQuery: any;

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  user:User;
  users: User[];

  selectedUser: string;
  selectedUserId: string;
  selectedUserRole: string;

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

    select(user: User) {
    	this.selectedUser = user.firstName;
    	this.selectedUserId = user._id;
    	this.selectedUserRole = user.role;
    }

    remove() {
		if (this.selectedUserRole !== 'admin'){
		    this.userService.deleteUser(this.selectedUserId).subscribe(
		        (res: any) => {
		            jQuery('#removeModal').modal('hide');
		            this.ngOnInit();
		        }
		    )
    	} else {
    		alert("YOU CAN'T DO THAT!")
    	}
    }

}
