import React, { useState } from "react";
import Answers from "../../components/answers";
import Correct from "../../components/correct";
import Question from "../../components/question";

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
  ];

  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  let question = SAMPLE_QUESTIONS[current].question;
  let correct_answer = SAMPLE_QUESTIONS[current].correct_answer;
  let incorrect_answers = SAMPLE_QUESTIONS[current].incorrect_answers;
  let answers = [...incorrect_answers, correct_answer];

  const nextQuestion = () => {
    setCurrent(current + 1);
  };

  const isCorrect = () => {
    setCorrect(correct + 1);
  };

  const isNotCorrect = () => {
    setIncorrect(incorrect + 1);
  };

  const handleClick = (e) => {
    if (e.currentTarget.value.toString() === correct_answer) {
      isCorrect();
    } else {
      isNotCorrect();
    }
    nextQuestion();

    console.log("Correct", correct);
    console.log("Incorrect", incorrect);
  };

  return (
    <div>
      <Question question={question} />
      <Answers answers={answers} handleClick={handleClick} />
      <Correct correct={correct} />
    </div>
  );
}

export default Quiz;
