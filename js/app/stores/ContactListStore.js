import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/AppDispatcher';

class ContactListStore extends EventEmitter {
	constructor() {
		super();

		this.list = peopleList;
	}

	addContact(contact) {
		const newPeopleList = this.list;
		newPeopleList.push(contact);
		this.emit("change");
	}

	removeContact(index) {
		const newContactList = this.list;

		newContactList.splice(index, 1);

		this.emit("change");
	}

	getAll() {
		return this.list;
	}

	handleActions(action) {
		switch(action.type) {
			case 'CREATE_CONTACT': {
				this.addContact(action.contact);
				break;
			}
			case 'DELETE_CONTACT': {
				this.removeContact(action.index);
				break;
			}
		}
	}
}

const peopleList = [{first_name:"Ed",last_name:"Wince",address:"755 South Lafayette Dr."},
			      {first_name:"Paul",last_name:"Webber",address:"599 Excalibur Dr."}];

const contactListStore = new ContactListStore;
dispatcher.register(contactListStore.handleActions.bind(contactListStore));

export default contactListStore;