import React from "react";
import "./Category.css";

function Category({ category, selectCategory }) {
  return (
    <span
      className="category"
      name={category}
      onClick={(e) => selectCategory(e)}
    >
      {category}
    </span>
  );
}

export default Category;
