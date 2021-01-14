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

  const handleCategory = (e) => {
    setCategory(e.target.name);
    setSelected(!selected);
  };

  const handleClick = () => {
    setSelected(false);
    setClicked(false);
    setCategories(false);
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
            className={selected ? "nav-link selected" : "nav-link"}
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
        </li>
        <li className="nav-item">
          <NavLink
            to="/high-scores"
            className="nav-link"
            activeClassName="selected"
            onClick={() => handleClick()}
            // onClick={() => setCategories(false)}
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
