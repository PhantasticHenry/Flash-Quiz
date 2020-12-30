import React, { useState } from "react";
import { FaTimes, FaBars, FaArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import Dropdown from "../dropdown";
import Button from "../button";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img className="navbar-logo" src={logo} alt="logo" />
      </NavLink>
      <div className="menu-icon">
        {clicked ? (
          <FaTimes onClick={() => setClicked(!clicked)} />
        ) : (
          <FaBars onClick={() => setClicked(!clicked)} />
        )}
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            onClick={() => setCloseMenu(!closeMenu)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            onClick={() => setCloseMenu(!closeMenu)}
            to="/start-quiz"
          >
            Start Quiz
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/high-score">
            High Score
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link arrow-down"
            to="/#"
            onClick={() => setDropdown(!dropdown)}
          >
            Questions <FaArrowDown />
          </NavLink>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <NavLink className="nav-link-dropdown" to="/add-question">
            Add Question
          </NavLink>
        </li>
      </ul>
      <Button />
    </nav>
  );
}

export default Navbar;
