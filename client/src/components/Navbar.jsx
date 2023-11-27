import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavHeader() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="fs-3">
            <strong>Gear Learning</strong>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/" className="fs-4">
              Home
            </Nav.Link>
            <Nav.Link href="/tutorials" className="fs-4">
              Tutorials
            </Nav.Link>
            <Nav.Link href="/flashcards" className="fs-4">
              Flashcards
            </Nav.Link>
            <Nav.Link href="/questions" className="fs-4">
              Tests
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;
