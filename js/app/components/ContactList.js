import React from 'react';

export class ContactList extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		const contactId = e.target.getAttribute('data-typeId');
		this.props.onClick(contactId);
	}

	render() {
		const listContent = this.props.contactList.map((list, i)=>{
			return <div className="row" key={i}>
						<div className="col-md-4 contact-fname">{list.first_name}</div>
						<div className="col-md-4 contact-lname">{list.last_name}</div>
						<div className="col-md-4 contact-address">{list.address}</div>
						<button name="remove" id="remove" className="btn" onClick={this.handleClick} data-typeid={i}>Remove</button>
					</div>
		});
		return (
				<div className="container contact-info">
					{listContent}
		       </div>
		       );
	}
}