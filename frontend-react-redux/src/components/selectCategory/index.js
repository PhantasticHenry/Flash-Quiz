import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SelectCategory.css";
import Category from "../category";

function SelectCategory({ closeCategories, category }) {
  const categories = useSelector((state) => state.flashcards).map(
    (f) => f.category
  );

  const uniqCat = [...new Set(categories)];

  const handleClick = (e) => {
    closeCategories();
    category(e);
  };

  return (
    <div className="select-category">
      <h3 className="select">Please Select a Category</h3>
      {/* <Link to={{pathname: '/start-quiz', }} onClick={(e) => handleClick(e)}> */}
      <Link to="/start-quiz" onClick={(e) => handleClick(e)}>
        <Category category={uniqCat} />
      </Link>
    </div>
  );
}

export default SelectCategory;
