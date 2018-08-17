import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { Message } from '../models/message.model.client';
import { SharedService } from './shared.service.client';
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class MessageService {
  baseUrl = environment.baseUrl;

constructor(private http: Http) { }

  // adds the message
  createMessage(message: Message) {
    const url = this.baseUrl+'/api/message/'; 
    return this.http.post(url, message).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))      
  }
   // returns the messages 
  findAllMessages() {
    const url = this.baseUrl+'/api/messages'; 
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      },
    )) 
   }
   // returns the message by id 
  findMessageById(messageId: string) {
    const url = this.baseUrl+'/api/message/'+messageId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))      
  }
 // removes the message
  deleteMessage(messageId: string) { 
    const url = this.baseUrl + '/api/message/'+ messageId;
    return this.http.delete(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
     ))
   }

}