import React from "react";
import "./Result.css";
import { NavLink } from "react-router-dom";

function Result({ correct, incorrect }) {
  return (
    <div className="result">
      {`Excellent! You got ${correct} out of ${correct + incorrect}.`}
      <NavLink to="/start-quiz" onClick={() => window.location.reload()}>
        Try Again
      </NavLink>
    </div>
  );
}

export default Result;
