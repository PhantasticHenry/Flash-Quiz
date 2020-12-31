import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DropdownItems } from "../dropdownItems";
import "./Dropdown.css";

function Dropdown() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <ul className={clicked ? "dropdown-menu clicked" : "dropdown-menu"}>
        {DropdownItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={item.cName}
                activeClassName="selected"
                to={item.path}
                onClick={() => setClicked(!clicked)}
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
