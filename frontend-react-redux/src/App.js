import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Quiz from "./features/quiz";
import Home from "./features/home";
import Navbar from "./components/navbar";
import HighScores from "./features/highscores";
import { getFlashcards } from "./actions/flashcard/getFlashcards";
import { getQuizzes } from "./actions/quiz/getQuizzes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlashcards());
  }, []);

  useEffect(() => {
    dispatch(getQuizzes());
  }, []);

  return (
    <div className="App">
      <Home />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/start-quiz" exact component={Quiz} />
          <Route path="/top25" exact component={HighScores} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
