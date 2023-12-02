 
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Quizzdata } from "../../utils/Quizzdata";
import Quizzquestion from "../../components/Quizzquestion";
import Timer from "../../components/Timer/Timer";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OneQuizz = () => {
  const [name, setName] = useState("");
  const [startquizz, setStartQuizz] = useState(false);
  const [timeOver, setTimeOver] = useState(false);

  const navigate = useNavigate();

  const handleResultSubmit = (result) => {
    if (result === "You passed") {
      Swal.fire({
        icon: "success",
        title: "Congratulations",
        text: `You passed the test ${name}`,
        navigate: navigate("/quizzes"),
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: `You failed the test ${name}`,
        navigate: navigate("/quizzes"),
      });
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      Swal.fire({
        icon: "error",
        title: "User name",
        text: "You forgot to enter your name!",
      });
      setStartQuizz(false);
    } else {
      setStartQuizz(true);
    }
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 240);

  return (
    <>
      {!startquizz && (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{
            minHeight: "77vh",
          }}>
          <Form onSubmit={handleNameSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="mx-5 px-3 fs-3">
                Enter your name
              </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
              <div className="mx-5">
                <Button
                  size="lg"
                  type="submit"
                  className="d-flex justify-content-center center mt-3 mx-5">
                  {" "}
                  Start Quizz
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Container>
      )}

      {startquizz && (
        <div>
          <Timer
            start={true}
            expiryTimestamp={time}
            alert={() => setTimeOver(true)}
          />
          <Container className="mt-3 d-flex justify-content-center">
            {Quizzdata.map((item, index) => (
              <div
                key={index}
                className="w-50 d-flex flex-column justify-content-center align-items-center ">
                <h2>{item.topic}</h2>
                <Form className="d-flex flex-column align-items-center  px-4">
                  <Form.Group>
                    <Quizzquestion
                      timeOver={timeOver}
                      onResultSubmit={handleResultSubmit}
                      questions={item.questions}
                    />
                  </Form.Group>
                </Form>
              </div>
            ))}
          </Container>
        </div>
      )}
    </>
  );
};

export default OneQuizz;
