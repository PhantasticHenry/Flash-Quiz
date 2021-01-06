import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import Dropdown from "../dropdown";
import SelectCategory from "../selectCategory";
import Quiz from "../../features/quiz";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [hover, setHover] = useState(false);
  const [categories, setCategories] = useState(false);
  const [category, setCategory] = useState(null);
  const [selected, setSelected] = useState(false);

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

  const closeCategories = () => {
    setCategories(false);
    setSelected(true);
  };

  // const handleClick = () => {
  //   setClicked(false);
  //   setCategories(!categories);
  // };

  const handleCategory = (e) => {
    setCategory(e.target.name);
  };

  const sidebar = () => {
    return (
      <div className={!clicked ? "hide" : ""}>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/add-flashcard"
            onClick={() => setClicked(false)}
          >
            Add Flashcard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/edit-flashcard"
            onClick={() => setClicked(false)}
          >
            Edit Flashcard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/remove-flashcard"
            onClick={() => setClicked(false)}
          >
            Remove Flashcard
          </NavLink>
        </li>
      </div>
    );
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
            to="/"
            className="nav-link"
            onClick={() => setCategories(!categories)}
          >
            Start Quiz
          </NavLink>
          {categories && (
            <SelectCategory
              closeCategories={closeCategories}
              category={handleCategory}
            />
          )}
          {/* <NavLink
            className="nav-link"
            activeClassName="selected"
            onClick={handleClick}
            to="/start-quiz"
          >
            Start Quiz
          </NavLink>
          {categories && <SelectCategory closeCategories={closeCategories} />} */}
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
            Flashcards
          </NavLink>
          {dropdown && <Dropdown />}
        </li>
        {sidebar()}
      </ul>
    </nav>
  );
}

export default Navbar;
