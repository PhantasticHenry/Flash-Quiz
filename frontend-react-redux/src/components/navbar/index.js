import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import Dropdown from "../dropdown";
import SelectCategory from "../selectCategory";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [hover, setHover] = useState(false);
  const [categories, setCategories] = useState(false);
  // const [category, setCategory] = useState(null);
  const [selectQuiz, setSelectQuiz] = useState(false);
  const [selectFlashcards, setSelectFlashcards] = useState(false);
  const [path, setPath] = useState("");

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
    path === "Start Quiz" && setSelectQuiz(true);
    path === "Flashcards" && setSelectFlashcards(true);
  };

  // const toggleActive = (e) => {
  //   console.log("targeting", e.target);
  // };

  const handleClick = () => {
    setSelectQuiz(false);
    setSelectFlashcards(false);
    setClicked(false);
    setCategories(false);
  };

  const handlePath = (e) => {
    setPath(e.target.innerText);
    setCategories(!categories);
    selectFlashcards &&
      setSelectFlashcards(!setSelectFlashcards) &&
      setSelectQuiz(false);
    selectQuiz && setSelectQuiz(!selectQuiz) && setSelectFlashcards(false);
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
      <NavLink to="/" onClick={() => handleClick()}>
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
          <NavLink className="nav-link" onClick={() => handleClick()} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className={selectQuiz ? "nav-link selected" : "nav-link"}
            onClick={(e) => handlePath(e)}
          >
            Start Quiz
          </NavLink>
          {categories && <SelectCategory closeCategories={closeCategories} />}
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
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink
            className={selectFlashcards ? "nav-link fc" : "nav-link"}
            to="/"
            onClick={(e) => handlePath(e)}
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
          >
            Flashcards
          </NavLink>
          {/* {dropdown && (
            <Dropdown
              handlePath={handlePath}
            />
          )} */}
          {dropdown && (
            <Dropdown
              handlePath={handlePath}
              closeCategories={closeCategories}
              path={path}
            />
          )}
        </li>
        {categories && (
          <SelectCategory closeCategories={closeCategories} path={path} />
        )}
        {sidebar()}
      </ul>
    </nav>
  );
}

export default Navbar;
