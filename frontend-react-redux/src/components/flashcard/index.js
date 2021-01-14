import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  const answersArray = [
    ...flashcard.incorrect_answers,
    flashcard.correct_answer,
  ].sort(() => Math.random() - 0.5);

  const answers = answersArray.map((answer) => (
    <li className="answer">{answer}</li>
  ));

  return (
    <div
      className={`flashcard ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      {flip ? (
        <div className="front">
          {flashcard.question}
          <ul className="answers">{answers}</ul>
        </div>
      ) : (
        <div className="back">{flashcard.correct_answer}</div>
      )}

      {/* {flip ? flashcard.correct_answer : flashcard.question} */}
    </div>
  );
}

export default Flashcard;
