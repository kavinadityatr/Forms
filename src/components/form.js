import './form.css';
import React from "react";
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
 

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
   
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["mobileno"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      
      var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please Fill the password";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
        formIsValid = false;
        errors["password"] = "Password is weak";
      }
    }


    this.setState({
      errors: errors
    });
    return formIsValid;


  }



render() {
  return (
    <center>
      <h1>DYNAMIC FORM</h1>
  <div id="main-registration-container">
    <div id="register">
      <h3>REGISTRATION FORM</h3>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      
      <label>Email ID : &nbsp;&nbsp;</label><br></br>
      <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <br></br>
      <label>Mobile No :</label><br></br>
      <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
      <div className="errorMsg">{this.state.errors.mobileno}</div>
      <br></br>
      <label>Username : &nbsp;</label><br></br>
      <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.username}</div>
      <br></br>
      <label>Password : &nbsp;</label><br></br>
      <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div>
      <br></br>
      <input type="submit" className="button"  value="Register"/>
      </form>
      
  </div>
</div>
</center>

    );
}


}

export default RegisterForm

