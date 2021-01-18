import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DropdownItems } from "../dropdownItems";
import "./Dropdown.css";

function Dropdown({ handlePath, selectCategory }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(!clicked);
    handlePath(e);
    return selectCategory;
  };

  return (
    <>
      <ul className={clicked ? "dropdown-menu clicked" : "dropdown-menu"}>
        {DropdownItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={item.cName}
                activeClassName="selected"
                to="/"
                onClick={handleClick}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
