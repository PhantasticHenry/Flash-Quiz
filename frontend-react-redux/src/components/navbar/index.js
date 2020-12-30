import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar logo" to="/">
        Navbar
      </NavLink>
      <div className="nav" id="navbarText">
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink className="nav-link" to="/start-quiz">
              Start Quiz
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/high-score">
              High Score
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/#">
              View/Edit Questions
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
