module.exports = function(app){

	var userModel = require('../models/user/user.model.server.js')
	var passport = require('passport');
	var LocalStrategy = require('passport-local').Strategy;
	var bcrypt = require("bcrypt-nodejs");

	app.get('/api/user/', findUser); //combined find user by credential with find all users
	app.get('/api/user/:uid', findUserById);
	app.post('/api/user/', createUser);
	app.put('/api/user/:uid', updateUser);
	app.delete('/api/user/:uid', deleteUser);
	app.post ('/api/register', register);
	app.post ('/api/login', passport.authenticate('local'), login);
	app.post('/api/logout', logout);
	app.post('/api/loggedIn', loggedin);
	passport.serializeUser(serializeUser);
	passport.deserializeUser(deserializeUser);
	passport.use(new LocalStrategy(localStrategy));



	function localStrategy(username, password, done) {
		 userModel.findUserByUsername(username).then(
		 	(user) => {
		 		if(user && bcrypt.compareSync(password, user.password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
		 	}
		 )
	}


	function login(req, res) {
   		var user = req.user;
   		res.json(user);
	}

	function logout(req, res) {
	   req.logOut();
	   res.sendStatus(200);
	}

	function loggedin(req, res) {
		if (req.isAuthenticated()){
			res.send(req.user);
		} else {
			res.send('0');
		}
	}

	function serializeUser(user, done) {
   	 done(null, user);
	}

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

	function register (req, res) {
	    var user = req.body;
	    user.password = bcrypt.hashSync(user.password);
	    userModel.createUser(user).then(
            function(user){
               req.login(user, function(err) {
                   res.json(user);
               });
	        }
	    );
	}

	//find user by given Id
	function findUser(req, res){
		const username = req.query['username'];
		const password = req.query['password'];
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
		else { res.json(users); }
	}

	function findUserById(req, res){
		var uid = req.params['uid'];
		userModel.findUserById(uid).then(
			data => {
				res.json(data);
			}
		)
	}

	function createUser(req, res){
		var user = req.body;
		userModel.createUser(user).then(
			(data)=>{
				res.json(data);
			}
		)
	}


	function updateUser(req, res){
		var uid = req.params['uid'];
		var user = req.body;
		userModel.updateUser(uid, user).then(
			data => {
				res.json(data);
			}
		);
	}

	function deleteUser(req, res){
		var uid = req.params['uid'];
		userModel.deleteUser(uid).then(
			data => {
				res.json(data);
			}
		);
	}
}