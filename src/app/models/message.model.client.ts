export class Message {
	_id?: string;
	name: string;
	email: string;
	message: string;

	constructor(_id, name, email, message) {
		this._id = _id;
		this.name = name;
		this.email = email;
		this.message = message;
	}
}