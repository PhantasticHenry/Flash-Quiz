import React, { useState } from "react";
import "../../features/flashcards/Flashcards.css";

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  const answersArray = [
    ...flashcard.incorrect_answers,
    flashcard.correct_answer,
  ].sort(() => Math.random() - 0.5);

  const answers = answersArray.map((answer, i) => {
    return (
      <li key={i} className="answer">
        {answer}
      </li>
    );
  });

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
    </div>
  );
}

export default Flashcard;
