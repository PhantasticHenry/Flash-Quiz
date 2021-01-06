import React from "react";
import "./Category.css";

function Category({ category }) {
  return (
    <button className="btn-category" name={category}>
      {category}
    </button>
  );
}

export default Category;
