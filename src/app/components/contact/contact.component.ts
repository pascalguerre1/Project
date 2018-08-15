import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service.client';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Message } from '../../models/message.model.client';
import { MessageService } from '../../services/message.service.client';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	@ViewChild('f') contactForm: NgForm;

  constructor(private router: Router, private sharedService: SharedService, private messageService: MessageService) { }

  name: string;
  email: string;
  message: string;

  ngOnInit() {
  }

  regs(){
    this.sharedService.attorneyRegs = false;
  }

  create(){
  	this.name = this.contactForm.value.name;
  	this.email = this.contactForm.value.email;
  	this.message = this.contactForm.value.message;
	const newMessage: Message = {
		name: this.name,
		email: this.email,
		message: this.message,
	};
	this.messageService.createMessage(newMessage).subscribe(
		(message: Message) =>{
			alert('Message sent successfully!')
			this.router.navigate(['']);
		}
	)
  }
}
