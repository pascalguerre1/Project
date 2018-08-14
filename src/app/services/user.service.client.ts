import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { SharedService } from './shared.service.client';
import { map } from "rxjs/operators";
import { Http, Response, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';

// injecting service into module
@Injectable()

export class UserService {
  baseUrl = environment.baseUrl;
  options: RequestOptions = new RequestOptions();

constructor(private router: Router, private sharedService: SharedService, private http: Http) { }

    login(username: string, password: string) {
        this.options.withCredentials = true;
        const credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/login', credentials, this.options).pipe(map(
            (response: Response) => {
                return response.json();
            }
        ));
    }

  logout(){
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options).pipe(map(
     (res: Response) => {
       this.sharedService.user = null;
       return res;
     }
   ));
  }

  loggedIn() {
   this.options.withCredentials = true;
   return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(map(
     (res: Response) => {
       const user = res.json();
       if (user !== 0) {
         this.sharedService.user = user; // setting user so as to share with all components
         return true;
       } else {
         this.router.navigate(['/login']);
         return false;
       }
     }
   ));
  }

    adminLoggedIn() {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options).pipe(map(
            (res: Response) => {
                const user = res.json();
                if (user !== 0 && user.role == 'admin') {
                    this.sharedService.user = user;
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        ));
    }

 // adds the user parameter instance to the local users array
  createUser(user: User) {
   this.options.withCredentials = true;
    const url = this.baseUrl+'/api/user'; 
    return this.http.post(url, user, this.options).pipe(map(
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
    console.log(url)
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

  // returns all user2
  findUser2() {
    const url = this.baseUrl+'/api/search'; 
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      },
    )) 
   }

    // returns all user2
    findUser2ById(userId2: string) {
    const url = this.baseUrl+'/api/reviews/'+userId2; 
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      },
    )) 
   }


  // returns all users
  findAllUsers() {
    const url = this.baseUrl+'/api/user'; 
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      },
    )) 
   }

}