import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SelectCategory.css";
import Category from "../category";

function SelectCategory({ closeCategories, path }) {
  // function SelectCategory({ closeCategories, ...props }) {
  const [categorySelect, setCategorySelect] = useState(false);
  const [category, setCategory] = useState(undefined);

  const categories = useSelector((state) => state.flashcards).map(
    (f) => f.category
  );

  const uniqCat = [...new Set(categories)];
  // const path = props.path === "Flashcards" ? "/flashcards" : "/start-quiz";
  console.log("path", path);

  function renderSwitch(path) {
    switch (path) {
      case "Flashcards":
        return "/flashcards";
      case "Start Quiz":
        return "/start-quiz";
      case "Edit Flashcard":
        return "/edit-flashcard";
      default:
        return console.log("error");
    }
  }

  const handleClick = (e) => {
    setCategorySelect(true);
    setCategory(e.target.getAttribute("name"));
  };

  useEffect(() => {
    category !== undefined && closeCategories();
  }, [category, closeCategories]);

  const cat = uniqCat.map((cat, i) => {
    return <Category key={i} category={cat} handleClick={handleClick} />;
  });

  return (
    <div className="select-category">
      <h3 className="select">Please Select a Category</h3>
      {cat}
      {categorySelect && (
        <Redirect
          to={{ pathname: renderSwitch(path), category: category }}
          // to={{ pathname: `${path}`, category: category }}
          onClick={(e) => handleClick(e)}
        />
      )}
    </div>
  );
}

export default SelectCategory;
