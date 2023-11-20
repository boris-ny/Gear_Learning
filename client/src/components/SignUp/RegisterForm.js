import { Component } from "react";
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
      this.userRegistration();
    }
  }

  userRegistration() {
    fetch("/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(this.state.fields),
    }).then((res) => res.json());
    localStorage.setItem("token", "webwinnerstoken");
    localStorage.setItem("username", this.state.fields.userName);
  }

  componentDidMount() {
    this.userRegistration();
  }

  // ... rest of your code
}

export default RegisterForm;
