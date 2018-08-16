module.exports = function(app){

	const messageModel = require('../models/message/message.model.server');
	


	app.post('/api/message/', createMessage);
	function createMessage(req, res){
		var message = req.body;
		messageModel.createMessage(message).then(
			(data) => {
				res.json(data);
			}
		)
	}

	// find all message
	app.get('/api/messages/', findAllMessages);
	function findAllMessages(req, res){
		messageModel.findAllMessages().then(
			(messages)=>{
				res.json(messages);
			}
		);
	}

	// find message by given id
	app.get('/api/message/:mid', findMessageById);
	function findMessageById(req, res){
		var mid = req.params['mid']
		messageModel.findMessageById(mid).then(
			(message) => {
				res.json(message);
			}
		);
	}
	// delete message
	app.delete('/api/message/:mid', deleteMessage); 
	function deleteMessage(req, res){
		var mid = req.params['mid'];
		messageModel.deleteMessage(mid).then(
			data => {
				res.json(data);
			}
		)
	}

}