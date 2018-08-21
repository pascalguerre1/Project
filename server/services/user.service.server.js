module.exports = function(app){

	const userModel = require('../models/user/user.model.server');
	var multer = require('multer'); //npm install multer --save
	var upload = multer({dest: './dist/assets/uploads'});

	var passport = require('passport');
	let LocalStrategy = require('passport-local').Strategy;
	passport.use(new LocalStrategy(localStrategy))

	passport.serializeUser(serializeUser);
	function serializeUser(user, done) {
   	 done(null, user);
	}

	passport.deserializeUser(deserializeUser);
	function deserializeUser(user, done) {
	    userModel.findUserById(user._id).then(
            function(user){
                done(null, user);
            },
            function(err){
                done(err, null);
            }
        );
	}

    function localStrategy(username, password, done) {
        userModel.findUserByCredentials(username, password).then(
            (user) => {
                if(user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            }
        )
   }
	//login
   app.post('/api/login', passport.authenticate('local'), login);
      function login(req, res) {
        res.json(req.user);
   }
   //logout
	app.post('/api/logout', logout)
      function logout(req, res) {
        req.logOut();
        res.sendStatus(200);
   }
   //loggedin
	app.post('/api/loggedIn', loggedIn);
    function loggedIn(req, res) {
        if(req.isAuthenticated()) {
            res.json(req.user);
        } else {
            res.send('0');
        }
    }
	// create user
	app.post('/api/user', createUser);//path to run function
	function createUser(req, res){
		var user = req.body;
	    userModel.createUser(user).then(
            function(user){
               req.login(user, function(err) {
                   res.json(user);
               });
	        }
	    );

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
        const callbackUrl   = req.headers.origin + "/user/";
        
        userModel.findUserById(uid).then(
            (user) => {
                user.image = '/assets/uploads/' + image.filename;
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