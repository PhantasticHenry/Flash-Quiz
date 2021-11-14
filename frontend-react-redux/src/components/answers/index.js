import React from "react";
import "./Answers.css";
import { shuffleArray } from "../../utils";

function Answers({ answers, handleClick }) {
  const options = shuffleArray(answers).map((answer, i) => (
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
      {options}
      {/* {options.sort(() => Math.random() - 0.5)} */}
    </div>
  );
}

export default Answers;
