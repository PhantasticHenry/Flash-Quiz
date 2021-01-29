import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../addFlashcard/AddFlashcard.css";
import { removeFlashcard } from "../../../actions/flashcard/removeFlashcard";
import { Redirect } from "react-router-dom";

function RemoveFlashcard(props) {
  const dispatch = useDispatch();
  const flashcard = props.location.state.flashcard;
  const { category, question, correct_answer, incorrect_answers } = flashcard;
  const [click, setClick] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const incorrectAnswers = incorrect_answers.map((ia, i) => {
    return <span key={i}>{ia}</span>;
  });

  function handleRemove() {
    if (window.confirm("Are you sure you wish to remove this flashcard?"))
      dispatch(removeFlashcard(flashcard));
    setConfirm(true);
  }

  return (
    <div className="remove-container">
      <div
        className={`remove ${click ? "flip" : ""}`}
        onClick={() => setClick(!click)}
      >
        <div className="front">
          <h2>Card Front</h2>
          <h4>Category</h4>
          <span>{category}</span>
          <h4>Question</h4>
          <span>{question}</span>
          <h4>Incorrect Answers</h4>
          {incorrectAnswers}
        </div>
        <div className="back">
          <h2>Card Back</h2>
          <h4 className="correct-answer">Correct Answer</h4>
          <span>{correct_answer}</span>
        </div>
        <button className="remove-btn" onClick={() => handleRemove()}>
          Remove Flashcard
        </button>
      </div>
      {confirm && <Redirect to="/" />}
    </div>
  );
}

export default RemoveFlashcard;
