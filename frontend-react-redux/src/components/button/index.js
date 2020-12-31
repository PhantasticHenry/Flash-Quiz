import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";

function Button() {
  return (
    <NavLink to="/add-question">
      <button className="btn">Add Question</button>
    </NavLink>
  );
}

export default Button;
