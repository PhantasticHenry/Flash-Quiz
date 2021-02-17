import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Result.css";
import { addQuiz } from "../../actions/quiz/addQuiz";

function Result({ correct, incorrect, category }) {
  const dispatch = useDispatch();
  const textInput = useRef();
  const [name, setName] = useState("");
  const [clicked, setClicked] = useState(false);

  const renderResults = () => {
    return !clicked ? (
      <div className={clicked ? "hide" : "result"}>
        {correct === correct + incorrect
          ? "Amazing!  You answered perfectly. 100%"
          : `Excellent! You answered ${correct} out of ${correct + incorrect}.`}
      </div>
    ) : (
      <div className={clicked ? "result" : "hide"}>
        Thank you for quizzing! Check out High Scores and see if you are top 25
        or try out flipping flashcards.
      </div>
    );
  };

  const quiz = {
    player: name,
    high_score: correct,
    category: category,
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addQuiz(quiz));
    setClicked(!clicked);
    setName("");
  };

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <div className="result-container">
      {renderResults()}
      <div className={clicked ? "hide" : "name"}>
        <label>Please enter name: </label>
        <span>&nbsp;&nbsp;</span>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter name here"
          ref={textInput}
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
