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
            <Form.Group>
              <Quizzquestion questions={item.questions} />
            </Form.Group>
            <button type="submit" className="btn btn-primary mb-3 btn-lg">
              Submit
            </button>
          </Form>
        </div>
      ))}
    </Container>
  );
};

export default OneQuizz;
