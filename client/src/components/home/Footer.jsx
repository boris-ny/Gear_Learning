
import { Navbar } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <Navbar
      bg="light"
      variant="footer"
      className="justify-content-center footer"
    >
      <Navbar style={{ fontSize: "1rem" }}>
        &copy; 2020 WebWinners
      </Navbar>
    </Navbar>
  );
};

export default Footer;
