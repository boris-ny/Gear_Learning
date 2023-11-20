// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
import FreeTest from "./components/freeTest/FreeTest";
import Result from "./components/resultsPage/Results";
import OneResultPage from "./components/oneResultPage/OneResultpage";
import Tutorials from "./components/tutorials/Tutorials";
import DrivingTips from "./components/drivingTips/DrivingTips";
import ContactUs from "./components/contactUs/ContactUs";
import Tests from "./components/tests/Tests";
import Login from "./Login";
import Logout from "./Logout";
import RegisterForm from "./components/SignUp/RegisterForm";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/freetest" element={<FreeTest/>} />
          <Route path="/results" element={<Result/>} />
          <Route path="/oneResultPage" element={<OneResultPage/>} />
          <Route path="/tutorials" element={<Tutorials/>} />
          <Route path="/drivingTips" element={<DrivingTips/>} />{" "}
          <Route path="/newUser" element={<RegisterForm/>} />{" "}
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/tests" element={<Tests/>} />
          <Route path="/login" element={<Login/>} />{" "}
          <Route path="/logout" element={<Logout/>} />
          <Route  path="/signup" element={<RegisterForm/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
