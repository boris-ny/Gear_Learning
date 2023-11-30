/* eslint-disable react/prop-types */
import { Form, Image } from "react-bootstrap";

const Quizzquestion = (props) => {
  const handleOptionChange = (e) => {
    let score = 0;
    let answer = e.target.value;

    if (answer === props.questions[0].answer) {
      score += 1;
    } else {
      score;
    }
    console.log(score);
  };

  if (!props.questions || props.questions.length === 0) {
    return null;
  }
  return (
    <>
      {props.questions.map((item, index) => (
        <div key={index} className="bg-light-subtle">
          <div className="d-flex flex-column border rounded border-secondary-subtle px-4 mt-5 mb-3">
            <Form.Label className="mt-3 lead fs-3 text-center">
              {item.title}
            </Form.Label>
            <Image src={item.img} loading="lazy" width={400} height={300} />
            {item.options.map((option, index) => (
              <div key={index} className="mb-3 ps-5">
                <Form.Check
                  type={"radio"}
                  name={item.id}
                  value={option}
                  label={option}
                  className="fs-5"
                  onChange={handleOptionChange}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Quizzquestion;
