import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import SelectCategory from "../selectCategory";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState(false);
  const [quizActive, setQuizActive] = useState(false);
  const [flashcardsActive, setFlashcardsActive] = useState(false);
  const [path, setPath] = useState("");

  function closeCategories() {
    setCategories(false);
    path === "Start Quiz" && setQuizActive(true);
    path === "Flashcards" && setFlashcardsActive(true);
    setClicked(false);
  }

  function handleClick() {
    setQuizActive(false);
    setFlashcardsActive(false);
    setClicked(false);
    setCategories(false);
  }

  function handlePath(e) {
    setPath(e.target.innerText);
    setCategories(!categories);
    flashcardsActive &&
      setFlashcardsActive(!setFlashcardsActive) &&
      setQuizActive(false);
    quizActive && setQuizActive(!quizActive) && setFlashcardsActive(false);
  }

  function sidebar() {
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
      </div>
    );
  }

  return (
    <nav className="navbar">
      <NavLink to="/" onClick={handleClick}>
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
            className={quizActive ? "nav-link selected" : "nav-link"}
            onClick={(e) => handlePath(e)}
          >
            Start Quiz
          </NavLink>
          {categories && (
            <SelectCategory
              closeCategories={closeCategories}
              active={categories}
            />
          )}
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
        {categories && (
          <SelectCategory closeCategories={closeCategories} path={path} />
        )}
        {sidebar()}
      </ul>
    </nav>
  );
}

export default Navbar;
