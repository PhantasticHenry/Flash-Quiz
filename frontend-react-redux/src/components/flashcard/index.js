import React, { useState, useEffect, useRef } from "react";
import "../../features/flashcards/Flashcards.css";

function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");

  const cardFront = useRef();
  const cardBack = useRef();

  function setMaxHeight() {
    const frontHeight = cardFront.current.getBoundingClientRect().height;
    const backHeight = cardBack.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

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

  useEffect(setMaxHeight, [
    flashcard.question,
    flashcard.correct_answer,
    answers,
  ]);

  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  return (
    <div
      className={`flashcard ${flip ? "flip" : ""}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={cardFront}>
        {flashcard.question}
        <ul className="answers">{answers}</ul>
      </div>
      <div className="back" ref={cardBack}>
        {flashcard.correct_answer}
      </div>
    </div>
  );
}

export default Flashcard;
