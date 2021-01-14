import React from "react";
import { useSelector } from "react-redux";
import "./Flashcards.css";
import Flashcard from "../../components/flashcard";

function Flashcards() {
  const flashcards = useSelector((state) => state.flashcards);
  const flashcard = flashcards.map((flashcard) => (
    <Flashcard flashcard={flashcard} key={flashcard.id} />
  ));
  return <div className="flashcards-container">{flashcard}</div>;
}

export default Flashcards;
