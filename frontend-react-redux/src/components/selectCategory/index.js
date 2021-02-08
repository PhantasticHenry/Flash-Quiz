import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SelectCategory.css";
import Category from "../category";
import { renderSwitch } from "../dropdownItems";
import { setCategory } from "../../actions/category/setCategory";

function SelectCategory({ handleActive, path }) {
  const dispatch = useDispatch();
  const [categorySelect, setCategorySelect] = useState(false);

  const categories = useSelector((state) => state.flashcards).map(
    (f) => f.category
  );
  const quizzes = useSelector((state) => state.quizzes);

  const uniqCat = [...new Set(categories)];

  const handleClick = (e) => {
    setCategorySelect(true);
    dispatch(setCategory(e.target.getAttribute("name")));
  };

  const category = useSelector((state) => state.category);

  useEffect(() => {
    category !== undefined && handleActive();
  }, [category, handleActive]);

  const cat = uniqCat.map((cat, i) => {
    return <Category key={i} category={cat} handleClick={handleClick} />;
  });

  return (
    <div className={categorySelect ? "hide" : "select-category"}>
      <h3 className="select">Please Select a Category</h3>
      {cat}
      {categorySelect && (
        <Redirect
          to={{
            pathname: renderSwitch(path, quizzes.length),
            category: category,
          }}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default SelectCategory;
