import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class UserService {

constructor() { }

users = [
	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com", gender:"Male", bio:"Lorem ipsum", office:"Hello", address:"123 fake st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", area1:"hello", area2:"bye"},
	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
	];

 // adds the user parameter instance to the local users array
  createUser(user) {
    user._id = Math.floor(Math.random() * 10000).toString();
    this.users.push(user);
    return user;
  }
// returns the user in local users array whose username matches the parameter username
  findUserByUsername(username) { 
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x]; }
    }
   }
// returns the user in local users array whose _id matches the userId parameter
  findUserById(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x]; }
    }
  }
// returns the user whose username and password match the username and password parameters
  findUserByCredentials(username, password) { 
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x]; }
    }
   }
// updates the user in local users array whose _id matches the userId parameter
  updateUser(userId, user) { 
    var olduser = this.findUserById(userId);
    var index = this.users.indexOf(olduser);
    this.users[index].username = user.username;
    this.users[index].password = user.password;
    this.users[index].firstName = user.firstName;
    this.users[index].lastName = user.lastName;
    this.users[index].email = user.email;
   }
// removes the user whose _id matches the userId parameter
  deleteUser(userId) { 
    var olduser = this.findUserById(userId);
    var index = this.users.indexOf(olduser);
    this.users.splice(index,1);
   }

}