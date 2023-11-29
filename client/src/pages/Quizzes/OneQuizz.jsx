import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Quizzdata } from "../../utils/Quizzdata";
import Quizzquestion from "../../components/Quizzquestion";

const OneQuizz = () => {
  
  return (
    <Container className="mt-3 d-flex justify-content-center">
      {Quizzdata.map((item, index) => (
        <div
          key={index}
          className="w-50 d-flex flex-column justify-content-center align-items-center ">
          <h2>{item.topic}</h2>
          <Form className="d-flex flex-column align-items-center  px-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Quizzquestion questions={item.questions}/>
            </Form.Group>
          </Form>
        </div>
      ))}
    </Container>
  );
};

export default OneQuizz;
