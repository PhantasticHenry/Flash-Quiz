import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Result.css";
import { NavLink } from "react-router-dom";
import { updateQuiz } from "../../actions/quiz/updateQuiz";

// try and dispatch to update currentQuiz with score

function Result({ correct, incorrect, quizID, catgegory }) {
  const dispatch = useDispatch();

  const score = (correct % (correct + incorrect)) * 10;
  // const quizID = currentQuiz.quiz.id;

  const [name, setName] = useState("");

  console.log("current quiz:", quizID);
  console.log("score", score);

  useEffect(() => {}, []);

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
    high_score: correct,
    catgegory: catgegory,
  };

  const handleClick = () => {
    dispatch(updateQuiz(quizID, quiz));
  };

  return (
    <div className="result-container">
      {handleResult()}
      {/* <div className="name"> */}
      <div onSubmit={() => handleClick()} className="name">
        <label>Please enter name: </label>
        <span>&nbsp;&nbsp;</span>
        <input
          onChange={(e) => handleChange(e)}
          value={name}
          placeholder="Enter name here"
        />
        {name !== "" && <button type="submit">Enter</button>}
      </div>
      <NavLink to="/">Try Again</NavLink>
    </div>
  );
}

export default Result;
