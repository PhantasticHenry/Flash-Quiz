import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Quiz.css";
import Answers from "../../components/answers";
import Question from "../../components/question";
import Result from "../../components/result";

function Quiz() {
  const category = useSelector((state) => state.category);
  const flashcards = useSelector((state) => state.flashcards);

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const questions = flashcards
    .filter((flashcard) => flashcard.category === category)
    .sort(() => Math.random() - 0.5);

  let question = questions[index].question;
  let correct_answer = questions[index].correct_answer;
  let incorrect_answers = questions[index].incorrect_answers;
  let answers = [...incorrect_answers, correct_answer];

  const nextQuestion = () => {
    setIndex(index + 1);
  };

  const checkAnswer = (answer) => {
    if (answer === correct_answer) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const handleClick = (e) => {
    if (index === questions.length - 1) {
      setGameFinished(true);
    } else {
      checkAnswer(e.currentTarget.getAttribute("name"));
      nextQuestion();
    }
  };

  return (
    <div className="quiz-container">
      {gameFinished ? (
        <>
          <Result correct={correct} incorrect={incorrect} category={category} />
        </>
      ) : (
        <>
          <Question question={question} />
          <Answers answers={answers} handleClick={handleClick} />
        </>
      )}
    </div>
  );
}

export default Quiz;
