import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoIosArrowDropdown, IoMdArrowDropdownCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import Dropdown from "../dropdown";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [hover, setHover] = useState(false);

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
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink
            className="nav-link"
            activeClassName="selected"
            to="/flashcards"
            onClick={() => setClicked(false)}
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
          >
            {/* need to figure out  how to remove arrow on side expand */}
            Flashcards{" "}
            {hover ? <IoMdArrowDropdownCircle /> : <IoIosArrowDropdown />}
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
    </nav>
  );
}

export default Navbar;
