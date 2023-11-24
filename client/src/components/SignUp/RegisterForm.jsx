import { Component } from "react";
import { redirect } from "react-router-dom";
import CustomNavbar from "../home/CustomNavbar";
import Footer from "../home/Footer";
import "./style.css";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["firstName"] = "";
      fields["lastName"] = "";
      fields["userName"] = "";
      fields["email"] = "";
      fields["password"] = "";
      fields["country"] = "";
      fields["address"] = "";
      fields["mobile"] = "";
      fields["secretquestion"] = "";
      fields["secretanswer"] = "";
      this.setState({ fields: fields });

      fetch("http://localhost:6000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.state.fields),
      }).then((res) => res.json());
      localStorage.setItem("token", "webwinnerstoken");
      localStorage.setItem("username", this.state.fields.userName);

      //  alert(JSON.stringify(this.state.fields));
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your first name.";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter text or alphabet only.";
      }
    }

    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your last name.";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter text or alphabet only.";
      }
    }
    if (!fields["userName"]) {
      formIsValid = false;
      errors["userName"] = "*Please enter your username.";
    }

    if (typeof fields["userName"] !== "undefined") {
      if (!fields["userName"].match(/^[a-zA-Z ]/)) {
        formIsValid = false;
        errors["userName"] = "*Please enter alphabet and *$ characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "*Please enter your Country.";
    }

    if (typeof fields["country"] !== "undefined") {
      if (!fields["country"].match(/^[a-zA-Z ]/)) {
        formIsValid = false;
        errors["country"] = "*Please enter text or alphabet only.";
      }
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (typeof fields["address"] !== "undefined") {
      if (!fields["address"].match(/^[a-zA-Z ]/)) {
        formIsValid = false;
        errors["address"] = "*Please enter text or alphabet only.";
      }
    }

    if (!fields["mobile"]) {
      formIsValid = false;
      errors["mobile"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobile"] !== "undefined") {
      if (!fields["mobile"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobile"] = "*Please enter valid mobile no.";
      }
    }
    if (!fields["secretquestion"]) {
      formIsValid = false;
      errors["secretquestion"] = "*Please enter your secretquestion.";
    }

    if (typeof fields["secretquestion"] !== "undefined") {
      if (!fields["secretquestion"].match(/^[a-zA-Z ]/)) {
        formIsValid = false;
        errors["secretquestion"] = "*Please enter text or alphabet only.";
      }
    }

    if (!fields["secretanswer"]) {
      formIsValid = false;
      errors["secretanswer"] = "*Please enter your secretanswer.";
    }

    if (typeof fields["secretanswer"] !== "undefined") {
      if (!fields["secretanswer"].match(/^[a-zA-Z ]/)) {
        formIsValid = false;
        errors["secretanswer"] = "*Please enter text or alphabet only.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    if (localStorage.getItem("token") !== null) {
      return redirect("/");
    } else
      return (
        <div id="main-registration-container">
          <CustomNavbar />
          <div id="register">
            <h3>User Registration</h3>
            <form
              method="post"
              name="userRegistrationForm"
              onSubmit={this.submituserRegistrationForm}>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={this.state.fields.firstName}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.firstName}</div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={this.state.fields.lastName}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.lastName}</div>
              <label>User Name:</label>
              <input
                type="text"
                name="userName"
                value={this.state.fields.userName}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.userName}</div>
              <label>Email ID:</label>
              <input
                type="text"
                name="email"
                value={this.state.fields.email}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.email}</div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.fields.password}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.password}</div>
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={this.state.fields.country}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.country}</div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={this.state.fields.address}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.address}</div>
              <label>Mobile No:</label>
              <input
                type="text"
                name="mobile"
                value={this.state.fields.mobile}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.mobile}</div>
              <label>Secret Question:</label>
              <input
                type="text"
                name="secretquestion"
                value={this.state.fields.secretquestion}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.secretquestion}</div>
              <label>Secret Answer:</label>
              <input
                type="text"
                name="secretanswer"
                value={this.state.fields.secretanswer}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.secretanswer}</div>

              <input type="submit" className="button" value="Register" />
            </form>
          </div>
          <Footer />
        </div>
      );
  }
}

export default RegisterForm;
