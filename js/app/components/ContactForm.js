import React from 'react';

export class ContactForm extends React.Component {

	constructor(props) {
		super(props);
		

		this.state = {
	      first_name: "",
	      last_name: "",
	      address: "",
	      targetContact: this.props.editContact
	    }

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
	    this.setState({
	      first_name: "",
	      last_name: "",
	      address: ""
	    });
	 }

	 handleChange(data) {
	    const state = this.state.targetContact;
	    const name = data.target.name;
	    state[name] = data.target.value;
	    this.setState(state);
	  }

	handleSubmit(e) {
		e.preventDefault();
		
		const state = this.state;
		state["first_name"] = e.target.first_name.value;
		state["last_name"] = e.target.last_name.value;
		state["address"] = e.target.address.value;
		state["index"] = e.target.index.value;

		this.setState(state);

		this.props.onSubmit(state);
		
		document.getElementById("contact_form").reset();
	}

	render() {
		return (
				<div className="col col-lg-12 col-sm-12">
					<div className="container">
						<div className="row">
							<div className="col col-lg-6 col-sm-8 col-lg-offset-1">
								<form name="contact_form" id="contact_form" className="contact-form" onSubmit={this.handleSubmit}>
									<fieldset>
										<legend>Add Contact</legend>
										<div className="form-group">
											<label htmlFor="first_name">Name:</label>
											<input id="first_name" name="first_name" className="form-control" type="text" value={this.state.targetContact.first_name} onChange={this.handleChange} required/>
										</div>
										<div className="form-group">
											<label htmlFor="last_name">LastName:</label>
											<input id="last_name" name="last_name" className="form-control" type="text"  value={this.state.targetContact.last_name} onChange={this.handleChange} required/>
										</div>
										<div className="form-group">
											<label htmlFor="address">Address:</label>
											<input id="address" name="address" className="form-control" type="text" value={this.state.targetContact.address} onChange={this.handleChange} required/>
										</div>
										<div>
											<input type="hidden" name="index" value={this.state.targetContact.index} />
											<input type="submit" name="submit" id="submit" className="btn btn-primary" />
										</div>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			);
	}
}