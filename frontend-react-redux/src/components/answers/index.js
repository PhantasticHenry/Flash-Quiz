import React from "react";

function Answers({ answers, handleClick }) {
  const options = answers.map((answer, i) => (
    <li onClick={handleClick} key={i} value={answer}>
      {answer}
    </li>
  ));

  return <div>{options}</div>;
}

export default Answers;
