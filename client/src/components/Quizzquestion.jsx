/* eslint-disable react/prop-types */

import { useState } from "react";
import { Form, Image } from "react-bootstrap";
import { useEffect } from "react";

const Quizzquestion = (props) => {
  const [score, setScore] = useState(0);

  const handleOptionChange = (e, index) => {
    let answer = e.target.value;
    if (answer === props.questions[index].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const calculateResult = () => {
    const percentage = (score / props.questions.length) * 100;
    if (percentage >= 50) {
      return "You passed";
    } else {
      return "You failed";
    }
  };
  const result = calculateResult();

  useEffect(() => {
    if (props.timeOver) {
      props.onResultSubmit(result);
    }
  }, [props, props.timeOver, result]);

  function submitResult(e) {
    e.preventDefault();
    props.onResultSubmit(result);
  }

  if (!props.questions || props.questions.length === 0) {
    return null;
  }

  return (
    <>
      {props.questions.map((item, questionIndex) => (
        <div key={questionIndex} className="bg-light-subtle">
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
                  onChange={(e) => handleOptionChange(e, questionIndex)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={submitResult}
        type="submit"
        className="btn btn-primary mb-3 btn-lg">
        Submit
      </button>
    </>
  );
};

export default Quizzquestion;
