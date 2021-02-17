import React from "react";
import NavMenuItems from "./NavMenuItems";
import SelectCategory from "../selectCategory";

function NavMenu({
  clicked,
  handleClick,
  quizActive,
  handlePath,
  flashcardsActive,
  categories,
  handleActive,
  path,
  setClicked,
  sidebar,
}) {
  return (
    <ul className={clicked ? "nav-menu active" : "nav-menu"}>
      <NavMenuItems
        handleClick={handleClick}
        quizActive={quizActive}
        handlePath={handlePath}
        flashcardsActive={flashcardsActive}
      />
      {categories && (
        <SelectCategory
          handleActive={handleActive}
          path={path}
          closeDiv={() => setClicked(false)}
        />
      )}
      {sidebar()}
    </ul>
  );
}

export default NavMenu;
