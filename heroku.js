var http = require('http');
var x = 1;
setInterval(function(){
	console.log('calling heroku: ' + x);
	x++;
	http.get('http://app-justice.herokuapp.com');
}, 1800000);//every 30 min