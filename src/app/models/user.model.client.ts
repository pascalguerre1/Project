export class User {
	_id: string;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	email: string;
	bio?: string;
	radioData?: string = '';
	office?: string;
	address?: string;
	city?: string;
	state?: string;
	phone?: string;
	site?: string;
	area1?: string;
	area2?: string;
	area3?: string;

	constructor(_id, username, password, firstName, lastName, email) {
		this._id = _id;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
}