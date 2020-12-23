import React from "react";

function Answers({ answers }) {
  const options = answers.map((answer, i) => <li key={i}>{answer}</li>);

  return <div>{options}</div>;
}

export default Answers;
