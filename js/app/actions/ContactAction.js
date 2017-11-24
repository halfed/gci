import dispatcher from '../dispatchers/AppDispatcher';

export function addContact(contact) {
	dispatcher.dispatch({
		type: 'CREATE_CONTACT',
		contact: contact
	});
}

export function removeContact(index) {
	dispatcher.dispatch({
		type: 'DELETE_CONTACT',
		index: index
	});
}