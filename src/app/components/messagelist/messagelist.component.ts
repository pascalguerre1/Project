import { Component, OnInit, } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { User } from '../../models/user.model.client';
import { SharedService } from '../../services/shared.service.client';
import { Message } from '../../models/message.model.client';
import { MessageService } from '../../services/message.service.client';
declare var jQuery: any;

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {

  user: User;
  selectedMessage:string;
  messages: Message[];
  message: Message;


  constructor(private userService: UserService, 
  	private activatedRoute: ActivatedRoute,
    public sharedService: SharedService, private messageService: MessageService) { 
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe(params => {
    this.messageService.findAllMessages().subscribe(
      (messages:Message[])=>{
        this.messages = messages;
      }
    )
    });
  }


  select(message: Message) {
    this.selectedMessage = message._id
  }

  remove() {
      this.messageService.deleteMessage(this.selectedMessage).subscribe(
          (res: any) => {
              jQuery('#removeModal').modal('hide');
              this.ngOnInit();
          }
      )
  }

}
