// src/components/Question.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Question() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // Implement logic to submit the answer and move to the next question
    // For simplicity, let's redirect to the next question
    const nextQuestionId = parseInt(id, 10) + 1;
    navigate.push(`/question/${nextQuestionId}`);
  };

  return (
    <div>
      <h2>Question {id}</h2>
      <p>What is the capital of France?</p>
      <div>
        <label>
          <input
            type="radio"
            value="Berlin"
            checked={selectedOption === "Berlin"}
            onChange={() => handleOptionChange("Berlin")}
          />
          Berlin
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Paris"
            checked={selectedOption === "Paris"}
            onChange={() => handleOptionChange("Paris")}
          />
          Paris
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Madrid"
            checked={selectedOption === "Madrid"}
            onChange={() => handleOptionChange("Madrid")}
          />
          Madrid
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Rome"
            checked={selectedOption === "Rome"}
            onChange={() => handleOptionChange("Rome")}
          />
          Rome
        </label>
      </div>
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
}

export default Question;
