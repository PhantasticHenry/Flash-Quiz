import React from "react";
import { useSelector } from "react-redux";
import "./Flashcards.css";
import Flashcard from "../../components/flashcard";

function Flashcards(props) {
  const category = props.location.category;
  const flashcards = useSelector((state) => state.flashcards);
  const flashcard = flashcards
    .filter((flashcard) => flashcard.category === category)
    .map((flashcard) => <Flashcard flashcard={flashcard} key={flashcard.id} />);

  return (
    <div className="flashcards-container">
      <div className="flashcards">{flashcard}</div>
    </div>
  );
}

export default Flashcards;
