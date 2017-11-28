import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/AppDispatcher';

class ContactListStore extends EventEmitter {
	constructor() {
		super();

		// TWO OBJECTS ONE FOR LIST DISPLAY AND ANOTHER FOR THE SINGLE CONTACT TO EDIT
		this.list = peopleList;
		this.contactFromList = {
				      first_name: "",
				      last_name: "",
				      address: "",
				      index: ""
				    }
	}

	addContact(contact, index) {
		const newPeopleList = this.list;
		const newContact = contact;

		if(newContact.index !== "" && newContact.index !== null) {
			newPeopleList.splice(newContact.index, 1, newContact);
		}
		else {
			newPeopleList.push(newContact);
		}

		// CLEAR CONTACT TO EDIT SO FORM IS BLANK
		this.contactFromList.first_name = "";
		this.contactFromList.last_name = "";
		this.contactFromList.address = "";
		this.contactFromList.index = "";
		
		this.emit("change");
	}

	getContact(index) {
		this.contactFromList.first_name = this.list[index].first_name;
		this.contactFromList.last_name = this.list[index].last_name;
		this.contactFromList.address = this.list[index].address;
		this.contactFromList.index = index;

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

	passContact() {
		return this.contactFromList;
	}

	handleActions(action) {
		switch(action.type) {
			case 'CREATE_CONTACT': {
				this.addContact(action.contact, action.index);
				break;
			}
			case 'GET_CONTACT': {
				this.getContact(action.index);
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