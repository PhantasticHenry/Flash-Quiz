import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img className="navbar-logo" src={logo} alt="logo" />
      </NavLink>
      <div className="menu-icon">{clicked ? <FaBars /> : <FaTimes />}</div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
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
    </nav>
  );
}

export default Navbar;
