import React from 'react';
import ReactDOM from 'react-dom';
import {ContactList} from './components/ContactList';
import {ContactForm} from './components/ContactForm';
import * as ContactAction from './actions/ContactAction';
import ContactListStore from './stores/ContactListStore';

class ContactListApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//list: peopleList
			list: ContactListStore.getAll()
		}

		this.addContact = this.addContact.bind(this);
		this.removeContact = this.removeContact.bind(this);
	}

	componentWillMount() {
		ContactListStore.on("change", () => {
			this.setState({
				list: ContactListStore.getAll()
			});
		});


	}

	addContact(contact) {
		ContactAction.addContact(contact);
	}

	/*addContact(contact) {
		let newPeopleList = this.state.list;

		newPeopleList.push(contact);

		this.setState({
			list: newPeopleList
		});
	}*/

	removeContact(index) {
		ContactAction.removeContact(index);
	}

	/*removeContact(contactIndex) {

		let newContactList = this.state.list;
		
		let updatedList = newContactList.splice(contactIndex, 1);

		this.setState({
			list: this.state.list
		});
	}*/

	render() {
		return (<div className="address-container">
					<header>
						Address Book
					</header>
					<ContactForm onSubmit={this.addContact} />
					<ContactList contactList={this.state.list} onClick={this.removeContact} />
	            </div>
	           );
	}
}

//const peopleList = [{"id": 1, "first_name":"Ed","last_name":"Wince","address":"755 South Lafayette Dr."},
//			      {"id": 2, "first_name":"jake","last_name":"loyd","address":"599 Excalibur Dr."}];



ReactDOM.render(<ContactListApp />, document.getElementById('app'));