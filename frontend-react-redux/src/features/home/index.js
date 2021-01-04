import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Home.css";
import { getFlashcards } from "../../actions/flashcard/getFlashcards";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlashcards());
  }, []);
  return <div className="home">We are at Home!!!!!!</div>;
}

export default Home;
