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

  const checkAnswer = (answer) => {
    if (answer === correct_answer) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const handleClick = (e) => {
    checkAnswer(e.currentTarget.value.toString());
    if (current + 1 <= SAMPLE_QUESTIONS.length) {
      nextQuestion();
    } else {
      setCurrent(0);
    }

    console.log("Correct", correct);
    console.log("Incorrect", incorrect);
  };
  //selecting last item in array to compare current to reset if end of array
  console.log("last", SAMPLE_QUESTIONS.pop());
  return (
    <div>
      <Question question={question} />
      <Answers answers={answers} handleClick={handleClick} />
      <Correct correct={correct} />
    </div>
  );
}

export default Quiz;
