import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-2  border-top bg-dark-subtle">
      <Container className="d-flex flex-column justify-content-center align-items-center lead">
        <p className="text-muted text-center w-50" style={{
          padding: 0,
          margin: 0,
        }}>
          Driving Online Course Prototype for the Intro Software Engineering
          Course 2023 at the African Leadership University
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <p className="text-muted mt-2 px-2">By Boris Nyilindekwe</p>
          <Button variant="secondary">
            <Link
              to="https://github.com/boris-ny/Gear_Learning"
              style={{
                textDecoration: "none",
                color: "white",
              }}>
              Github Repo
            </Link>
          </Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
