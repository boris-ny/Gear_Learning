import { Container } from "react-bootstrap"
import Form from "react-bootstrap/Form"

const Quizzes = () => {
  return (
    <>
      <Container>
        <h1 className="mt-4">
          <span className="badge text-bg-info">Quizzes</span>
        </h1>
        <div className="">
          <Form.Label htmlFor="text">Please put in your name</Form.Label>
          <Form.Control type="text" id="text" />
        </div>
      </Container>
    </>
  );
}

export default Quizzes