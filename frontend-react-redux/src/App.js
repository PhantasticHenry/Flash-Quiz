import "./App.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Quiz from "./features/quiz";
import Home from "./features/home";
import Navbar from "./components/navbar";
import HighScores from "./features/highscores";
import Flashcards from "./features/flashcards";
import { getFlashcards } from "./actions/flashcard/getFlashcards";
import { getQuizzes } from "./actions/quiz/getQuizzes";
import AddFlashcard from "./features/flashcards/addFlashcard";
import EditFlashcard from "./features/flashcards/editFlashcard";
import RemoveFlashcard from "./features/flashcards/removeFlashcard";

function App() {
  const quizzes = useSelector((state) => state.quizzes);
  const flashcards = useSelector((state) => state.flashcards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlashcards());
  }, [flashcards.length]);

  useEffect(() => {
    dispatch(getQuizzes());
  }, [quizzes.length]);

  return (
    <div className="App">
      <Home />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quizzes/:slug" exact component={Quiz} />
          <Route path="/high-scores" exact component={HighScores} />
          <Route path="/flashcards" exact component={Flashcards} />
          <Route path="/add-flashcard" exact component={AddFlashcard} />
          <Route
            path="/flashcards/:slug/edit-flashcard"
            exact
            component={EditFlashcard}
          />
          <Route
            path="/flashcards/:slug/remove-flashcard"
            exact
            component={RemoveFlashcard}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
