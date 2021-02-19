import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../../../actions/flashcard/addFlashcard";
import "./AddFlashcard.css";
import AddForm from "./AddForm";

function AddFlashcard(props) {
  const dispatch = useDispatch();
  const [categoryProp] = useState(props.location.state);
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answer1, setAnswer1] = useState([]);
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [click, setClick] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const flashcard = {
      category: category,
      question: question,
      correct_answer: correctAnswer,
      incorrect_answers: [answer1, answer2, answer3],
    };
    dispatch(addFlashcard(flashcard));
    setSubmitted(true);
  };

  function checkParams() {
    const passing =
      question !== "" &&
      answer1 !== "" &&
      answer2 !== "" &&
      answer3 !== "" &&
      correctAnswer !== "" &&
      true;

    return passing ? (
      <input type="submit" value="Create Flashcard" />
    ) : (
      <span style={{ color: "red", fontWeight: "bolder" }}>
        Please fill card back
      </span>
    );
  }

  return (
    <div className="add-flashcard-container">
      <AddForm
        click={click}
        handleSubmit={handleSubmit}
        categoryProp={categoryProp}
        setCategory={setCategory}
        setQuestion={setQuestion}
        setAnswer1={setAnswer1}
        setAnswer2={setAnswer2}
        setAnswer3={setAnswer3}
        setClick={setClick}
        checkParams={checkParams}
        setCorrectAnswer={setCorrectAnswer}
        submitted={submitted}
      />
    </div>
  );
}

export default AddFlashcard;
