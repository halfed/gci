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
			list: ContactListStore.getAll(),
			contactFromList: ContactListStore.passContact()
		}

		this.addContact = this.addContact.bind(this);
		this.getContact = this.getContact.bind(this);
		this.removeContact = this.removeContact.bind(this);
	}

	componentWillMount() {
		ContactListStore.on("change", () => {
			this.setState({
				list: ContactListStore.getAll(),
				contactFromList: ContactListStore.passContact()
			});
		});
	}

	addContact(contact, index) {
		ContactAction.addContact(contact, index);
	}

	getContact(index) {
		ContactAction.getContact(index);
	}

	removeContact(index) {
		ContactAction.removeContact(index);
	}

	render() {
		return (<div className="container-fluid">
					<div className="row">
						<ContactList contactList={this.state.list} onClick={this.removeContact} onGetContactClick={this.getContact}/>
						<ContactForm editContact={this.state.contactFromList} onSubmit={this.addContact} />
					</div>
	            </div>
	           );
	}
}

ReactDOM.render(<ContactListApp />, document.getElementById('app'));