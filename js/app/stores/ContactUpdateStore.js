import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/AppDispatcher';

class ContactUpdateStore extends EventEmitter {
	constructor(props) {
		super(props);

		this.contact = {
					      first_name: "",
					      last_name: "",
					      address: "",
					      index: 
					    }
	}

	getContact(list, index) {
		first_name: this.list[index].first_name;
		last_name: this.list[index].first_name;
		address: this.list[index].address;

		this.emit("change");
	}

	getAll() {
		return this.contact;
	}
}

const contactUpdateStore = new ContactUpdateStore;

export default contactUpdateStore;