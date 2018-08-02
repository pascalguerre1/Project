module.exports = function(app){

	const userModel = require('../models/user/user.model.server');
	var multer = require('multer'); //npm install multer --save
	var upload = multer({dest: './dist/assets/uploads'});

	var users = [
		{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"18 badges", office:"Hello", address:"123 fake st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
		{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"4 badges", office:"Hello", address:"456 fakes st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
		{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"14 badges", office:"Hello", address:"789 fakess st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
		{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"2 badges", office:"Hello", address:"489 fakesss st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
		{_id: "789", username: "hi", password: "hi", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"19 badges", office:"Hello", address:"415 fakem st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
	];

	var user2 = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice1", lastName: "Wonder", email: "alice@gmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"18 badges", office:"Hello", address:"123 fake st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"4 badges", office:"Hello", address:"456 fakes st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"14 badges", office:"Hello", address:"789 fakess st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
    {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"2 badges", office:"Hello", address:"489 fakesss st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
    {_id: "789", username: "hi", password: "hi", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"19 badges", office:"Hello", address:"415 fakem st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
  ]; 


	// create user
	app.post('/api/user', createUser);//path to run function
	function createUser(req, res){
		var user = req.body;
	    user._id = Math.floor(Math.random() * 10000).toString();
	    users.push(user);
	    res.json(user);
	}
	// select user by id
	function selectUserById(uid){
		for (let x = 0; x < users.length; x++) {
	      if (users[x]._id === uid) {
	        return users[x]; 
	      }
	    }
	}
	// find user by given id
	app.get('/api/user/:uid', findUserById);//path to run function
	function findUserById(req, res){
		var uid = req.params['uid']; //get route info from url
		var user = selectUserById(uid);
		res.json(user);
	}
	// find all users and find users by credentials
	app.get('/api/user', findUser);//path to run function
	function findUser(req, res){
		const username = req.query["username"];//get route parameter after '?' from url
		const password = req.query["password"];//get route parameter after '?' from url
		if(username && password){ //find user by username and password
			var user;
			for (let x = 0; x < users.length; x++) {
	      		if (users[x].username === username && users[x].password === password) {
	        		user = users[x]; 
	        	}      
	    	}
	    	res.json(user);//sending data back to client side in json format
	    	return;		
		}
		else if(username){//find user by username 
			var user;
			for (let x = 0; x < users.length; x++) {
		      if (users[x].username === username) {
		        user = users[x]; 
		      }
		    }
		    res.json(user);//sending data back to client side in json format	    
		} 
		else {
			res.json(users);
		}
	}
	// update user
	app.put('/api/user/:uid', updateUser);//path to run function
	function updateUser(req, res){
		var uid = req.params['uid']; //get route info from url
		var user = req.body;
	    var olduser = selectUserById(uid);
	    var index = users.indexOf(olduser);
	    users[index].username = user.username;  
	    users[index].password = user.password;
	    users[index].firstName = user.firstName;  
	    users[index].lastName = user.lastName;
	    users[index].email = user.email;
	    users[index].bio = user.bio;
	    users[index].office = user.office;
	    users[index].address = user.address;
	    users[index].city = user.city;
	    users[index].state = user.state;
	    users[index].phone = user.phone;
	    users[index].site = user.site;
	    users[index].image = user.image;	    	    
		res.json(user);
	}

	// delete user
	app.delete('/api/user/:uid', deleteUser);//path to run function
	function deleteUser(req, res){
		var uid = req.params['uid']; //get route info from url
	    var olduser = selectUserbyId(uid);
	    var index = this.users.indexOf(olduser);
	    this.users.splice(index,1);
		res.json(users);
	}

	// upload image avatar
	app.post("/api/user/:uid/upload", upload.single('image'), uploadImage);//path to run function
	function uploadImage(req, res){
		var uid = req.params['uid']; //get route info from url
		var user = selectUserById(uid);
		var image = req.file;
	    user.image = 'assets/uploads/'+image.filename;
	    var callbackUrl = req.headers.origin+'/user/'+uid;
		res.redirect(callbackUrl);
	}	


// find all user2
	app.get('/api/search', findUser2);//path to run function
	function findUser2(req, res){
		res.json(user2);
	}


}