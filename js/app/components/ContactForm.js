import React from 'react';
///import NewContactStore from './stores/ContactListStore';

export class ContactForm extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
	    this.setState({
	      first_name: "",
	      last_name: "",
	      address: ""
	    });
	 }

	handleSubmit(e) {
		e.preventDefault();
		
		const formData = new FormData(e.target);
		const state = this.state;
		state["first_name"] = e.target.fname.value;
		state["last_name"] = e.target.lname.value;
		state["address"] = e.target.address.value;
		this.setState(state);
		this.props.onSubmit(state);
		document.getElementById("contact_form").reset();
	}

	render() {
		return (
			<div className="container contact-form">
				<div className="row">
					<form name="contact_form" id="contact_form" className="contact-form" onSubmit={this.handleSubmit}>
						<fieldset>
							<legend>Add Contact</legend>
							<div>
								<label htmlFor="fname">Name:</label>
								<input id="fname" name="fname" type="text" value={this.props.first_name} required/>
							</div>
							<div>
								<label htmlFor="lname">LastName:</label>
								<input id="lname" name="lname" type="text" required/>
							</div>
							<div>
								<label htmlFor="address">Address:</label>
								<input id="address" name="address" type="text" required/>
							</div>
							<div>
								<input type="submit" name="submit" id="submit" className="btn" />
							</div>
						</fieldset>
					</form>
				</div>
			</div>
			);
	}
}