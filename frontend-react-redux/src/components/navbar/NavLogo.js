import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

function NavLogo({ handleClick }) {
  return (
    <NavLink to="/" onClick={handleClick}>
      <img className="navbar-logo" src={logo} alt="logo" />
    </NavLink>
  );
}

export default NavLogo;
