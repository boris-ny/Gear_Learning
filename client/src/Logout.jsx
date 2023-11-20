import { Component } from "react";
import { redirect } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }

  render() {
    return redirect("/");
  }
}

export default Logout;
