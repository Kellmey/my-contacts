import React from "react"; // importing react library

// making use of a class component 
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    contact_number: "",
  };

  // validation of fields
  add = (e) => {
    e.preventDefault();// updating the state
    if (this.state.name === "" || this.state.email === "" || this.state.contact_number === "") {
      alert("ALl the fields are mandatory!"); // Alert created 
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", contact_number: "" }); /* Setting the state */
  };

  render() { 
    // Creating the form to enter information
    return (
      <div className="ui main">
        <h2>Please Add Info</h2>
        <p>Click on "Add Contact" for information to be saved</p>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name" // Creating a placeholder for Name
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}// Updating the state
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"// Creating a placeholder for Email.
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}// Updating the state
            />
</div>
          <div className="field">
            <label>Contact Number</label>
            <input
              type="text"
              name="contact_number"
              placeholder="Contact_Number" /* Creating a placeholder for Contact_Number. */
              value={this.state.contact_number}
              onChange={(e) => this.setState({ contact_number: e.target.value })} // Updating the state
            />
          </div > 
          <div>
          <button className="ui button red">Add Contact</button>
          </div>
        </form>
      </div> 
    );
  }
}
// Exporting AddContacts
export default AddContact;