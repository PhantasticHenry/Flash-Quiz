import React from "react";
import "./Answers.css";

function Answers({ answers, handleClick }) {
  function shuffleArray(answers) {
    let n = answers.length - 1;
    for (; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      const temp = answers[n];
      answers[n] = answers[j];
      answers[j] = temp;
    }
    return answers;
  }
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
      {options.sort(() => Math.random() - 0.5)}
    </div>
  );
}

export default Answers;
