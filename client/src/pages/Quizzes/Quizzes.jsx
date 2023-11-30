/* eslint-disable no-undef */
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

import { Quizzdata } from "../../utils/Quizzdata";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Quizzes = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const startQuiz = (item) => {
    if (!name) {

      Swal.fire({
        icon: "error",
        title: "User name",
        text: "You forgot to enter your name!",
      });
    } else {
      navigate(`/quizzes/${item}`);
    }
  };
  return (
    <>
      <Container style={{
        minHeight: "74vh",
      }}
      >
        <h1 className="mt-4 d-flex justify-content-center">
          <span className="badge text-bg-info">Quizzes</span>
        </h1>
        <Container className=" w-50">
          <Form.Label
            htmlFor="text"
            className="lead fs-3 d-flex justify-content-center">
            Please put in your name
          </Form.Label>
          <Form.Control
            type="text"
            id="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Container>

        <Accordion className="mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Please Choose a quiz you want to do
            </Accordion.Header>
            <Accordion.Body>
              {Quizzdata.map((item, index) => {
                return (
                  <ol key={index} className="d-flex align-items-center">
                    <li className="px-2 mt-2 fs-4 lead">{item.topic}</li>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => startQuiz(item.id)}>
                      Start Quiz
                    </Button>
                  </ol>
                );
              })}

              {/* <ol className="d-flex align-items-center">
                <li className="px-3 mt-2 fs-4 lead">Road Signs</li>
                <Button variant="primary" size="lg">Start Quiz</Button>
              </ol> */}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

// Quizzes.propTypes = {
//   name: propTypes.string,
//   title: propTypes.string,
// };
export default Quizzes;
