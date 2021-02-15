import React from "react";
import "./Answers.css";
import { useShuffleArray } from "../../hooks/useShuffleArray";

function Answers({ answers, handleClick }) {
  const options = useShuffleArray(answers).map((answer, i) => (
    <li
      onClick={handleClick}
      key={i}
      name={answer}
      className={`option-${i + 1}`}
    >
      {answer}
    </li>
  ));

  return (
    <div className="answers quiz">
      {options.sort(() => Math.random() - 0.5)}
    </div>
  );
}

export default Answers;
