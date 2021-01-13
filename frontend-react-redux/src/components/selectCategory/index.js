import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SelectCategory.css";
import Category from "../category";

function SelectCategory({ closeCategories }) {
  const [categorySelect, setCategorySelect] = useState(false);
  const [category, setCategory] = useState(undefined);

  const categories = useSelector((state) => state.flashcards).map(
    (f) => f.category
  );

  const uniqCat = [...new Set(categories)];

  const handleClick = (e) => {
    setCategorySelect(true);
    setCategory(e.target.getAttribute("name"));
  };

  useEffect(() => {
    category !== undefined && closeCategories();
  }, [category]);

  return (
    <div className="select-category">
      <h3 className="select">Please Select a Category</h3>
      <Category category={uniqCat} selectCategory={(e) => handleClick(e)} />
      {categorySelect && (
        <Redirect
          to={{ pathname: "/start-quiz", category: category }}
          onClick={(e) => handleClick(e)}
        />
      )}
    </div>
  );
}

export default SelectCategory;
