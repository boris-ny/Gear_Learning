// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const token = localStorage.getItem("token");

const ResultsNavbar = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "rgba(55, 61, 73, 0.975)",
      }}
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="/" active>
        <Image src="/assets/logof.png" height="50vh" width="50vw" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/tutorials">Tutorials</Nav.Link>
          <Nav.Link href="/drivingTips">Driving Tips</Nav.Link>
          {/* <Nav.Link href="/tests">Take Tests</Nav.Link> */}
          {token != null ? <Nav.Link href="/tests">Take Tests</Nav.Link> : ''}
          <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        </Nav>
        <Navbar.Brand href="/freetest">
          <Button variant="secondary">Return The Test</Button>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ResultsNavbar;
