/* eslint-disable react/prop-types */
import { Form, Image } from "react-bootstrap";
import { useState } from "react";

const Quizzquestion = (props) => {
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.value);

    setItem((prevState) => ({
      ...prevState,
      kindOfStand: e.target.value,
    }));
  };
  if (!props.questions || props.questions.length === 0) {
    return null;
  }
  console.log(props.questions);
  return (
    <>
      {props.questions.map((item, index) => (
        <div key={index} className="bg-light-subtle">
          <div className="d-flex flex-column border rounded border-secondary-subtle px-4 my-5">
            <Form.Label className="mt-3 lead fs-3 text-center">
              {item.title}
            </Form.Label>
            <Image src={item.img} loading="lazy" width={400} height={300} />
            {item.options.map((option, index) => (
              <div key={index} className="mb-3 ps-5">
                <Form.Check
                  type={"radio"}
                  name={option}
                  onChange={handleChange}
                  checked={kindOfStand === "design"}
                  id={`default-radio`}
                  label={option}
                  className="fs-5"
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
