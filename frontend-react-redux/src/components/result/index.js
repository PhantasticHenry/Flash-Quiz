import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Result.css";
import { Redirect } from "react-router-dom";
import { updateQuiz } from "../../actions/quiz/updateQuiz";

function Result({ correct, incorrect, quizID, catgegory }) {
  const dispatch = useDispatch();
  const score = (correct % (correct + incorrect)) * 10;
  const [name, setName] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleResult = () => {
    return (
      <div className="result">
        {correct === correct + incorrect
          ? "Amazing!  You answered perfectly. 100%"
          : `Excellent! You answered ${correct} out of ${correct + incorrect}.`}
      </div>
    );
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const quiz = {
    player: name,
    id: quizID,
    high_score: correct,
    catgegory: catgegory,
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(updateQuiz(quizID, quiz));
    setName("");
    setClicked(!clicked);
  };

  return (
    <div className="result-container">
      {!clicked ? handleResult() : <Redirect to="/high-scores" />}
      <div className="name">
        <label>Please enter name: </label>
        <span>&nbsp;&nbsp;</span>
        <input
          onChange={(e) => handleChange(e)}
          value={name}
          placeholder="Enter name here"
        />
        {name !== "" && (
          <button onClick={handleClick} type="submit">
            Enter
          </button>
        )}
      </div>
    </div>
  );
}

export default Result;
