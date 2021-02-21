import React from "react";

function RemovingCard({
  category,
  question,
  incorrectAnswers,
  correct_answer,
}) {
  return (
    <>
      {" "}
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
    </>
  );
}

export default RemovingCard;
