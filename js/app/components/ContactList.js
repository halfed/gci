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
			return <div className="container-fluid" key={i}>
						<div className="row list-container">
							<div className="col-lg-3 col-sm-3 contact-fname">{list.first_name}</div>
							<div className="col-lg-3 col-sm-3 contact-lname">{list.last_name}</div>
							<div className="col-lg-3 col-sm-3 contact-address">{list.address}</div>
							<button name="remove" id="remove" className="btn btn-secondary btn-sm delete-inline" onClick={this.handleClick} data-typeid={i}>Remove</button>
						</div>
					</div>
		});
		return (
				<div className="col col-lg-9 col-sm-12 col-lg-offset-1">
					<div className="container-fluid">
						<div className="row list-container heading">
							<div className="col-lg-3 col-sm-3">First Name:</div>
							<div className="col-lg-3 col-sm-3">Last Name:</div>
							<div className="col-lg-3 col-sm-3">Address:</div>
						</div>
					</div>
					{listContent}
		       </div>
		       );
	}
}