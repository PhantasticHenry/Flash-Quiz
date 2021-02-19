import React from "react";
import UserInput from "./UserInput";
import FlipButton from "./FlipButton";
import { Redirect } from "react-router-dom";

function CardBack({
  setCorrectAnswer,
  setClick,
  click,
  checkParams,
  submitted,
}) {
  return (
    <div className="back">
      <h4>Card Back</h4>
      <UserInput
        setCorrectAnswer={setCorrectAnswer}
        htmlFor="correct-answer"
        className="form-correct-answer"
        name="correct-answer"
        placeholder="Enter Answer"
      />
      <FlipButton setClick={setClick} click={click} />
      {checkParams()}
      {submitted && <Redirect to="/" />}
    </div>
  );
}

export default CardBack;
