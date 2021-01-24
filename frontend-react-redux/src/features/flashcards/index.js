import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Flashcards.css";
import Flashcard from "../../components/flashcard";

function Flashcards(props) {
  const [click, setClick] = useState(false);
  const flashcards = useSelector((state) => state.flashcards);
  const category = props.location.category;
  const flashcard = flashcards
    .filter((flashcard) => flashcard.category === category)
    .map((flashcard) => <Flashcard flashcard={flashcard} key={flashcard.id} />);

  return (
    <div className="flashcards-container">
      <div className="flashcard-btn">
        <NavLink className="flashcard-btn add" to="add-flashcard">
          Add Flashcard
        </NavLink>
        <span className="flashcard-btn edit" onClick={() => setClick(!click)}>
          Edit Flashcard
        </span>
        <span className="flashcard-btn remove">Remove Flashcard</span>
      </div>
      <div className="flashcards">{flashcard}</div>
    </div>
  );
}

export default Flashcards;
