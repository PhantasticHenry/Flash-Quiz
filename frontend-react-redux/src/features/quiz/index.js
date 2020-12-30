import React, { useState } from "react";
import Answers from "../../components/answers";
import Correct from "../../components/correct";
import Question from "../../components/question";
import Result from "../../components/result";

function Quiz() {
  const SAMPLE_QUESTIONS = [
    {
      id: 1,
      question: "2 + 2",
      correct_answer: "4",
      incorrect_answers: ["1", "2", "3"],
    },
    {
      id: 2,
      question: "7 + 7",
      correct_answer: "14",
      incorrect_answers: ["11", "12", "13"],
    },
    {
      id: 3,
      question: "7 + 3",
      correct_answer: "10",
      incorrect_answers: ["11", "12", "13"],
    },
    {
      id: 4,
      question: "7 + 4",
      correct_answer: "11",
      incorrect_answers: ["15", "12", "13"],
    },
    {
      id: 5,
      question: "6 + 7",
      correct_answer: "13",
      incorrect_answers: ["11", "12", "23"],
    },
    {
      id: 6,
      question: "1 + 7",
      correct_answer: "8",
      incorrect_answers: ["121", "9", "23"],
    },
  ];

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  let question = SAMPLE_QUESTIONS[index].question;
  let correct_answer = SAMPLE_QUESTIONS[index].correct_answer;
  let incorrect_answers = SAMPLE_QUESTIONS[index].incorrect_answers;
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
    if (index >= SAMPLE_QUESTIONS.length) {
      setGameFinished(true);
    } else {
      checkAnswer(e.currentTarget.value.toString());
      nextQuestion();
    }
  };

  // console.log("Current", index);
  // console.log("***", SAMPLE_QUESTIONS.length);
  console.log(SAMPLE_QUESTIONS.pop());

  return (
    <div>
      {gameFinished ? (
        <>
          <Result correct={correct} incorrect={incorrect} />
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
