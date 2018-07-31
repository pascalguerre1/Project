import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { SharedService } from './shared.service.client';
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class UserService {
  baseUrl = environment.baseUrl;

constructor(private http: Http) { }

 // adds the user parameter instance to the local users array
  createUser(user: User) {
    const url = this.baseUrl+'/api/user'; 
    return this.http.post(url, user).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))      
  }
// returns the user in local users array whose username matches the parameter username
  findUserByUsername(username: string) {
    const url = this.baseUrl+'/api/user?username='+username; 
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    )) 
   }
// returns the user in local users array whose _id matches the userId parameter
  findUserById(userId: string) {
    const url = this.baseUrl+'/api/user/'+userId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))      
  }
// returns the user whose username and password match the username and password parameters
  findUserByCredentials(username: string, password: string) { 
    const url = this.baseUrl+'/api/user?username='+username+'&password='+password;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))
   }

// updates the user in local users array whose _id matches the userId parameter
  updateUser(userId: string, user: User) { 
    const url = this.baseUrl+'/api/user/'+userId;
    return this.http.put(url, user).pipe(map(
      (response: Response) => {
        return response.json();
      }
     ))
   }

// removes the user whose _id matches the userId parameter
  deleteUser(userId: string) { 
    const url = this.baseUrl+'/api/user/'+userId;
    return this.http.delete(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
     ))
   }

}