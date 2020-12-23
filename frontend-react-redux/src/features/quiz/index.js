import React, { useState } from "react";
import Answers from "../../components/answers";
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
  let question = SAMPLE_QUESTIONS[current].question;
  let correct_answer = SAMPLE_QUESTIONS[current].correct_answer;
  let incorrect_answers = SAMPLE_QUESTIONS[current].incorrect_answers;
  let answers = [...incorrect_answers, correct_answer];

  return (
    <div>
      <Question question={question} />
      <Answers answers={answers} />
    </div>
  );
}

export default Quiz;
