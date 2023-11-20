import { Nav, Image, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";
import "./TestNavbar.css";

import PropTypes from "prop-types";

// ... rest of your code

TestNavbar.propTypes = {
  testLength: PropTypes.number.isRequired,
  situationNo: PropTypes.number.isRequired,
};

const TestNavbar = ({ situationNo, testLength }) => {
  return (
    <Navbar
      style={{
        backgroundColor: "rgba(55, 61, 73, 0.975)",
      }}
      expand="lg"
      variant="dark">
      <Navbar.Brand href="/" active>
        <Image src="/assets/logof.png" height="50vh" width="50vw" />
      </Navbar.Brand>
      <Navbar.Brand>
        <Timer minutes={22} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto end-navbar">
          <Navbar.Brand>
            <p
              className="nav-position text-center mt-2 mr-3 free-navbar"
              style={{ fontWeight: "bold" }}>
              {situationNo} out of {testLength}
            </p>
          </Navbar.Brand>
          <Navbar.Brand href="/results">
            <Button variant="secondary">End My Test</Button>
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TestNavbar;
