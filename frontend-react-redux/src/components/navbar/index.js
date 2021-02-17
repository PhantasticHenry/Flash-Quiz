import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import NavMenu from "./NavMenu";
import NavLogo from "./NavLogo";
import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState(false);
  const [quizActive, setQuizActive] = useState(false);
  const [flashcardsActive, setFlashcardsActive] = useState(false);
  const [path, setPath] = useState("");

  function handleActive() {
    path === "Start Quiz" && setQuizActive(true);
    path === "Flashcards" && setFlashcardsActive(true);
    path === "High Scores" &&
      setFlashcardsActive(false) &&
      setQuizActive(false);
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
      <NavLogo handleClick={handleClick} />
      <MenuIcon clicked={clicked} setClicked={setClicked} />
      <NavMenu
        clicked={clicked}
        handleClick={handleClick}
        quizActive={quizActive}
        handlePath={handlePath}
        flashcardsActive={flashcardsActive}
        categories={categories}
        handleActive={handleActive}
        path={path}
        setClicked={setClicked}
        sidebar={sidebar}
      />
    </nav>
  );
}

export default Navbar;
