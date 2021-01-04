import React from "react";
import { useSelector } from "react-redux";
import "./SelectCategory.css";
import Category from "../category";

function SelectCategory() {
  const categories = useSelector((state) => state.flashcards).map(
    (f) => f.category
  );

  const uniqCat = [...new Set(categories)];

  return (
    <div className="select-category">
      <h3 className="select">Please Select a Category</h3>
      <Category category={uniqCat} />
    </div>
  );
}

export default SelectCategory;
