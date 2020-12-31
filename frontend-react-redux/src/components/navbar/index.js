import React, { useState } from "react";
import { FaTimes, FaBars, FaArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import Dropdown from "../dropdown";
import Button from "../button";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  // const [closeMenu, setCloseMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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
        <li className="nav-item-home">
          <NavLink
            className="nav-link"
            onClick={() => setClicked(false)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="selected"
            onClick={() => setClicked(false)}
            to="/start-quiz"
          >
            Start Quiz
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/high-score"
            activeClassName="selected"
          >
            High Score
          </NavLink>
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => onMouseEnter()}
          onMouseLeave={() => onMouseLeave()}
        >
          <NavLink
            className="nav-link"
            to="#"
            onClick={() => setClicked(false)}
          >
            Questions <FaArrowDown />
          </NavLink>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link-dropdown"
            to="/add-question"
            onClick={() => setClicked(false)}
          >
            Add Question
          </NavLink>
        </li>
      </ul>
      {/* <Button /> */}
    </nav>
  );
}

export default Navbar;
