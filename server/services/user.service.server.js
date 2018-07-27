module.exports = function(app){

	var users = [
	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com", gender:"Male", bio:"Lorem ipsum", image:"https://www.ustitleseries.net/assets/profile_avatar-8f9ebff986868f54e6d7fd3befa117ccc0e67ef50580d254b3a77d3e7b409eef.png", badge:"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1415490092badge.png", bcount:"14 badges", office:"Hello", address:"123 fake st", city:"boston", state:"MA", phone:"12345", site:"www.123.com", selectedValues: ["Entertainment Law", "Intellectual Property Law", "Bankruptcy Law"]},
	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"},
	{_id: "789", username: "hi", password: "hi", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
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

}