import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCategory } from "../../actions/category/setCategory";
import Category from "../category";
import RenderByCategory from "./RenderByCategory";
import "./SelectCategory.css";

function SelectCategory({ handleActive, path, closeDiv }) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const quizzes = useSelector((state) => state.quizzes);
  const categories = useSelector((state) => state.flashcards).map(
    (f) => f.category
  );
  const [categorySelect, setCategorySelect] = useState(false);

  const uniqCat = [...new Set(categories)];

  const handleClick = (e) => {
    setCategorySelect(true);
    dispatch(setCategory(e.target.getAttribute("name")));
    closeDiv();
  };

  const cat = uniqCat.map((cat, i) => {
    return <Category key={i} category={cat} handleClick={handleClick} />;
  });

  useEffect(() => {
    category !== undefined && handleActive();
  }, [category, handleActive]);

  return (
    <div className={categorySelect ? "hide" : "select-category"}>
      <h3 className="select">Please Select a Category</h3>
      {cat}
      {categorySelect && (
        <RenderByCategory
          path={path}
          handleClick={handleClick}
          category={category}
          quizzes={quizzes}
        />
      )}
    </div>
  );
}

export default SelectCategory;
