import React from "react";
import { NavLink } from "react-router-dom";

function NavMenuItems({
  handleClick,
  quizActive,
  handlePath,
  flashcardsActive,
}) {
  return (
    <>
      <li className="nav-item-home">
        <NavLink className="nav-link" onClick={() => handleClick()} to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/"
          className={quizActive ? "nav-link selected" : "nav-link"}
          onClick={(e) => handlePath(e)}
        >
          Start Quiz
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/high-scores"
          className="nav-link"
          activeClassName="selected hs"
          onClick={() => handleClick()}
        >
          High Scores
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={flashcardsActive ? "nav-link fc" : "nav-link"}
          to="/"
          onClick={(e) => handlePath(e)}
        >
          Flashcards
        </NavLink>
      </li>
    </>
  );
}

export default NavMenuItems;
