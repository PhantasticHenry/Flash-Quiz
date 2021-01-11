import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Home.css";
import { getFlashcards } from "../../actions/flashcard/getFlashcards";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlashcards());
  }, []);

  return (
    <div className="home">
      <div className="stars-layer-1"></div>
      <div className="stars-layer-2"></div>
    </div>
  );
}

export default Home;
