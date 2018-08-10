module.exports = function(app){

	const userModel = require('../models/user/user.model.server');
	var multer = require('multer'); //npm install multer --save
	var upload = multer({dest: './dist/assets/uploads'});

	// var users = [

	// 	{_id: "000", username: "alice3", password: "alice3", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", role:"admin"},

	// 	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"18 badges", role:"user"},
	// 	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"4 badges", role:"user"},
	// 	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"14 badges", role:"user"},
	// 	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"2 badges", role:"user"},
	// 	{_id: "789", username: "hi", password: "hi", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"19 badges", role:"user"},
    
 //    	{_id: "555", username: "alice2", password: "alice2", firstName: "Alice1", lastName: "Wonder", email: "alice@gmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"18 badges", office:"Hello", address:"123 fake st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"], role:"attn"},
 //    	{_id: "777", username: "alice1", password: "alice1", firstName: "Alice1", lastName: "Wonder2", email: "alice@gmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"18 badges", office:"Bye", address:"123 fake st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law"], role:"attn"},    
 //    	{_id: "888", username: "bob2", password: "bob2", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"4 badges", office:"Hi", address:"456 fakes st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["yBankruptcy Law"], role:"attn"},
 //    	{_id: "900", username: "charly2", password: "charly2", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"14 badges", office:"Good", address:"789 fakess st", city:"doston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Intellectual Property Law", "Personal Injury Law"], role:"attn"},
 //    	{_id: "700", username: "shiyu2", password: "shiyu2", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"2 badges", office:"Yay", address:"489 fakesss st", city:"foston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Business Law"], role:"attn"},
 //    	{_id: "100", username: "hi2", password: "hi2", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org", gender:"Male", bio:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"19 badges", office:"Ball", address:"415 fakem st", city:"goston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Bankruptcy Law"], role:"attn"},	

	// ];

	// create user
	app.post('/api/user', createUser);//path to run function
	function createUser(req, res){
		var user = req.body;
		userModel.createUser(user).then(
			(data)=>{
				res.json(data);
			}
		)
	}
	// find user by given id
	app.get('/api/user/:uid', findUserById);//path to run function
	function findUserById(req, res){
		var uid = req.params['uid'];
		userModel.findUserById(uid).then(
			data => {
				res.json(data);
			}
		)
	}
	// find all users and find users by credentials
	app.get('/api/user', findUser);//path to run function
	function findUser(req, res){
		const username = req.query['username'];//get route parameter after '?' from url
		const password = req.query['password'];//get route parameter after '?' from url
		//find user by credentials
		if(username && password){
			userModel.findUserByCredentials(username, password).then(
				data => {
					res.json(data);
				}
			)
			return;
		} 
		//find user by username
		if(username) {
			userModel.findUserByUsername(username).then(
				data => {
					res.json(data);
				}
			);
     		return;
		}
		userModel.findUsers().then(
            (users) => {
                res.json(users)
            }
        );
	}
	// update user
	app.put('/api/user/:uid', updateUser);//path to run function
	// function updateUser(req, res){
	// 	var uid = req.params['uid']; //get route info from url
	// 	var user = req.body;
	//     var olduser = selectUserById(uid);
	//     var index = users.indexOf(olduser);
	//     users[index].username = user.username;  
	//     users[index].password = user.password;
	//     users[index].firstName = user.firstName;  
	//     users[index].lastName = user.lastName;
	//     users[index].email = user.email;
	//     users[index].bio = user.bio;
	//     users[index].office = user.office;
	//     users[index].address = user.address;
	//     users[index].city = user.city;
	//     users[index].state = user.state;
	//     users[index].phone = user.phone;
	//     users[index].site = user.site;
	//     users[index].image = user.image;	    	    
	// 	res.json(user);
	// }
	function updateUser(req, res){
		var uid = req.params['uid'];
		var user = req.body;
		userModel.updateUser(uid, user).then(
			data => {
				res.json(data);
			}
		);
	}	

	// delete user
	app.delete('/api/user/:uid', deleteUser);//path to run function
	function deleteUser(req, res){
		var uid = req.params['uid'];
		userModel.deleteUser(uid).then(
			data => {
				res.json(data);
			}
		);
	}
	// upload image avatar
	app.post("/api/user/:uid/upload", upload.single('image'), uploadImage);//path to run function
	    function uploadImage(req, res) {
        const uid = req.params['uid'];
        const image = req.file;
        const callbackUrl   = req.headers.origin + "/user/"+uid;
        
        userModel.findUserById(uid).then(
            (user) => {
                user.image = '/assets/uploads/' + image.filename;
                console.log(user.image)
                userModel.updateUser(uid, user).then(
                    (data) => {
                        res.redirect(callbackUrl);
                    }
                );
            }
        );
    }
	// find all user2
	app.get('/api/search', findUser2);//path to run function
	function findUser2(req, res){

		userModel.findUsers().then(
            (users) => {
 		var user;
		var user2=[];
		for (let x = 0; x < users.length; x++) {
	      	if (users[x].role === 'attn') {
	        	user = users[x];
                user2.push(user)
	        }
	    }           	
	    res.json(user2);
            }
        );
	}

// find  user2
	app.get('/api/reviews/:uid2', findUser2ById);//path to run function
	function findUser2ById(req, res){
		var uid2 = req.params['uid2'];
		userModel.findUserById(uid2).then(
			data => {
				res.json(data);
			}
		)
	}

}