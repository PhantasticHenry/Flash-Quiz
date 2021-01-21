import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../../../actions/flashcard/addFlashcard";
import "./AddFlashcard.css";
import { renderSwitch } from "../../../components/dropdownItems";
import { Redirect } from "react-router-dom";

function AddFlashcard(props) {
  const dispatch = useDispatch();
  let category = props.location.category;
  // const [category, setCategory] = useState("reactjs");
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  function clearState() {
    setQuestion("");
    setCorrectAnswer("");
    setIncorrectAnswers("");
    setOption2("");
    setOption3("");
    let category = "";
  }

  const paramsArray = [
    question,
    correctAnswer,
    incorrectAnswers,
    setOption2,
    setOption3,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const incorrect_answers = [...incorrectAnswers, option2, option3];
    const flashcard = {
      category: category,
      question: question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrect_answers,
    };
    dispatch(addFlashcard(flashcard));
    // clearState();
  };

  function checkParams() {
    return true;
  }

  return (
    <div className="add-flashcard-container">
      <form className=".card-form" onSubmit={handleSubmit}>
        {/* <label name="category" type="select">
          Pick a category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Reactjs">ReactJS</option>
            <option value="Redux">Redux</option>
            <option value="Ruby">Ruby</option>
            <option value="Math">Math</option>
          </select>
        </label> */}
        <label
          className="form-question"
          type="text"
          name="question"
          onChange={(e) => setQuestion(e.target.value)}
        >
          Question: &nbsp;
          <input placeholder="Enter Question" />
        </label>
        <label
          className="form-correct-answer"
          type="text"
          name="correct-answer"
          onChange={(e) => setCorrectAnswer(e.target.value)}
        >
          Answer: &nbsp;
          <input placeholder="Enter Answer" />
        </label>
        <label
          className="form-incorrect-answer"
          type="text"
          name="incorrect-answer-1"
          onChange={(e) => setIncorrectAnswers([e.target.value])}
        >
          Incorrect Answer: &nbsp;
          <input placeholder="Enter incorrect answer" />
        </label>
        <label
          className="form-incorrect-answer"
          type="text"
          name="incorrect-answer-2"
          onChange={(e) => setOption2(e.target.value)}
        >
          Incorrect Answer: &nbsp;
          <input placeholder="Enter incorrect answer" />
        </label>
        <label
          className="form-incorrect-answer"
          type="text"
          name="incorrect-answer-3"
          onChange={(e) => setOption3(e.target.value)}
        >
          Incorrect Answer: &nbsp;
          <input placeholder="Enter incorrect answer" />
        </label>
        {checkParams ? (
          <input type="submit" value="Create Flashcard" />
        ) : (
          <span style={{ color: "red" }}>Please complete card</span>
        )}
        {/* <input type="submit" value="Create Flashcard" /> */}
      </form>
    </div>
  );
}

export default AddFlashcard;
