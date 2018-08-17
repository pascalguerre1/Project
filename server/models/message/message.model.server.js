var mongoose = require('mongoose');
var MessageSchema = require('./message.schema.server.js');
var MessageModel = mongoose.model('MessageModel', MessageSchema);


MessageModel.createMessage = createMessage;
function createMessage(message){
	return MessageModel.create(message);
}

MessageModel.findAllMessages = findAllMessages;
function findAllMessages(){
	return MessageModel.find();
}

MessageModel.findMessageById = findMessageById;
function findMessageById(mid){
	return MessageModel.findById(mid);
}

MessageModel.deleteMessage = deleteMessage;
function deleteMessage(mid){
	return MessageModel.remove({_id: mid});
}

module.exports = MessageModel;