import dispatcher from '../dispatchers/AppDispatcher';

export function addContact(contact, index) {
	dispatcher.dispatch({
		type: 'CREATE_CONTACT',
		contact: contact,
		index: index
	});
}

export function getContact(index) {
	dispatcher.dispatch({
		type: 'GET_CONTACT',
		index: index
	});
}

export function removeContact(index) {
	dispatcher.dispatch({
		type: 'DELETE_CONTACT',
		index: index
	});
}