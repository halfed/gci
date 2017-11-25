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

	removeContact(index) {
		ContactAction.removeContact(index);
	}

	render() {
		return (<div className="container-fluid">
					<div className="row">
						<ContactList contactList={this.state.list} onClick={this.removeContact} />
						<ContactForm onSubmit={this.addContact} />
					</div>
	            </div>
	           );
	}
}


ReactDOM.render(<ContactListApp />, document.getElementById('app'));