import React from "react";
import { Redirect } from "react-router-dom";
import FlipButton from "./FlipButton";

function FormBack({
  setCorrectAnswer,
  setClick,
  click,
  checkParams,
  submitted,
}) {
  return (
    <div className="back">
      <h4>Card Back</h4>
      <label
        className="form-correct-answer"
        type="text"
        name="correct-answer"
        onChange={(e) => setCorrectAnswer(e.target.value)}
      >
        <textarea placeholder="Enter Answer" />
      </label>
      <FlipButton setClick={setClick} click={click} />
      {checkParams()}
      {submitted && <Redirect to="/" />}
    </div>
  );
}

export default FormBack;
