import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Quiz.css";
import Answers from "../../components/answers";
import Question from "../../components/question";
import Result from "../../components/result";
import { startQuiz } from "../../actions/quiz/startQuiz";

function Quiz() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const category = useSelector((state) => state.category);

  const quizzes = useSelector((state) => state.quizzes);
  const flashcards = useSelector((state) => state.flashcards);
  const questions = flashcards
    .filter((flashcard) => flashcard.category === category)
    .sort(() => Math.random() - 0.5);
  const currentQuiz = quizzes[quizzes.length - 1];

  let question = questions[index].question;
  let correct_answer = questions[index].correct_answer;
  let incorrect_answers = questions[index].incorrect_answers;
  let answers = [...incorrect_answers, correct_answer];

  useEffect(() => {
    const newQuiz = {
      player: "",
      high_score: 0,
      category: category,
    };
    dispatch(startQuiz(newQuiz));
  }, [category]);

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
    if (index >= 10) {
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
          <Result
            correct={correct}
            incorrect={incorrect}
            quizID={currentQuiz.id}
            category={category}
          />
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
