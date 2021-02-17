import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function MenuIcon({ clicked, setClicked }) {
  return (
    <div className="menu-icon">
      {clicked ? (
        <FaTimes onClick={() => setClicked(!clicked)} />
      ) : (
        <FaBars onClick={() => setClicked(!clicked)} />
      )}
    </div>
  );
}

export default MenuIcon;
