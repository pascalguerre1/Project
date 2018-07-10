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
	selectedValues?: string[];

	constructor(_id, username, password, firstName, lastName, email, gender, office, address, city, state, phone, site) {
		this._id = _id;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.radioData = gender;
		this.office = office;
		this.address = address;
		this.city = city;
		this.state = state;
		this.phone = phone;
		this.site = site;
	}
}