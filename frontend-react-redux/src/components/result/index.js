import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addQuiz } from "../../actions/quiz/addQuiz";
import InputName from "./InputName";
import "./Result.css";

function Result({ correct, incorrect, category }) {
  const dispatch = useDispatch();
  const textInput = useRef();
  const [name, setName] = useState("");
  const [clicked, setClicked] = useState(false);

  const renderResult = () => {
    return !clicked ? (
      <div className={clicked ? "hide" : "result"}>
        {correct === correct + incorrect
          ? "Amazing!  You answered perfectly. 100%"
          : `Excellent! You answered ${correct} out of ${correct + incorrect}.`}
      </div>
    ) : (
      <div className={clicked ? "result" : "hide"}>
        Thank you for quizzing! Check out High Scores and see if you made it to
        top 25 or try out flipping flashcards.
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
      {renderResult()}
      <InputName
        clicked={clicked}
        setName={setName}
        name={name}
        textInput={textInput}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Result;
