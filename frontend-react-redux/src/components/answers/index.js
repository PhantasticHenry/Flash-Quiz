import React from "react";
import "./Answers.css";

function Answers({ answers, handleClick }) {
  const options = answers.map((answer, i) => (
    <li
      onClick={handleClick}
      key={i}
      name={answer}
      className={`option-${i + 1}`}
    >
      {answer}
    </li>
  ));

  return <div className="answers quiz">{options}</div>;
}

export default Answers;
