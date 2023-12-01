/* eslint-disable no-undef */
import { Button, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Quizzdata } from "../../utils/Quizzdata";
import { useNavigate } from "react-router-dom";

const Quizzes = () => {
  const navigate = useNavigate();

  const startQuiz = (item) => {
    navigate(`/quizzes/${item}`);
  };
  return (
    <>
      <Container
        style={{
          minHeight: "74vh",
        }}>
        <h1 className="mt-4 d-flex justify-content-center">
          <span className="badge text-bg-info">Quizzes</span>
        </h1>

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
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};


export default Quizzes;
