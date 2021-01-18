import React from "react";
import "./Category.css";

function Category({ category, handleClick }) {
  return (
    <span className="category" name={category} onClick={handleClick}>
      {category}
    </span>
  );
}

export default Category;
