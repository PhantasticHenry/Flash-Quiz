import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../addFlashcard/AddFlashcard.css";
import { removeFlashcard } from "../../../actions/flashcard/removeFlashcard";
import { Redirect } from "react-router-dom";
import RemoveButton from "./RemoveButton";
import RemovingCard from "./RemovingCard";

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
      console.log(flashcard);
    dispatch(removeFlashcard(flashcard));
    setConfirm(true);
  }

  return (
    <div className="remove-container">
      <div
        className={`remove ${click ? "flip" : ""}`}
        onClick={() => setClick(!click)}
      >
        <RemovingCard
          category={category}
          question={question}
          incorrectAnswers={incorrectAnswers}
          correct_answer={correct_answer}
        />
        <RemoveButton handleRemove={handleRemove} />
      </div>
      {confirm && <Redirect to="/" />}
    </div>
  );
}

export default RemoveFlashcard;
