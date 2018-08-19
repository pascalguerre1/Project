export class User {
	_id?: string;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	email: string;
	radioData?: string = '';
	gender?: string;   //to be removed
	office?: string;
	address?: string;
	city?: string;
	state?: string;
	phone?: string;
	site?: string;
	selectedValues?: string[];
	image?: string;
	badge?: string;
	bio?: string;
	bcount?: string;
	role?: string;
	dateCreated: string;
	reviewCount?: number;

	constructor(_id, username, password, firstName, lastName, email, gender, office, address, city, state, phone, site, selectedValues, image, badge, bio, bcount, role) {
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
		this.selectedValues = selectedValues;
		this.image = image;
		this.badge = badge;
		this.bio = bio;
		this.bcount = bcount;
		this.role = role;
	}
}
