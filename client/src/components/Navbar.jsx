import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import image1 from "../assets/car.png"

function NavHeader() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="fs-3">
            <Image src={image1} alt="logo" width="50" height="50" />
            <strong className="ps-2">Gear Learning</strong>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/" className="fs-4">
              Home
            </Nav.Link>
            <Nav.Link href="/flashcards" className="fs-4">
              Flashcards
            </Nav.Link>
            <Nav.Link href="/videos" className="fs-4">
              Videos
            </Nav.Link>
            <Nav.Link href="/quizzes" className="fs-4">
              Quizzes
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;
