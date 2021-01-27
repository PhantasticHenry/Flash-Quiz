import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Flashcards.css";
import Flashcard from "../../components/flashcard";

function Flashcards(props) {
  const [allowEdit, setAllowEdit] = useState(false);
  const [remove, setRemove] = useState(false);

  const flashcards = useSelector((state) => state.flashcards);
  const category = props.location.category;
  const flashcard = flashcards
    .filter((flashcard) => flashcard.category === category)
    .map((flashcard) => (
      <Flashcard
        flashcard={flashcard}
        key={flashcard.id}
        allowEdit={allowEdit}
        allowRemove={remove}
      />
    ));

  function handleEdit() {
    setAllowEdit(!allowEdit);
    setRemove(false);
  }

  function handleRemove() {
    setRemove(!remove);
    setAllowEdit(false);
  }

  return (
    <div className="flashcards-container">
      <div className="flashcard-btn">
        <NavLink className="flashcard-btn add" to="add-flashcard">
          Add Flashcard
        </NavLink>
        <span className="flashcard-btn edit" onClick={() => handleEdit()}>
          Edit Flashcard
        </span>
        <span className="flashcard-btn remove" onClick={() => handleRemove()}>
          Remove Flashcard
        </span>
      </div>
      <div className="flashcards">{flashcard}</div>
    </div>
  );
}

export default Flashcards;
