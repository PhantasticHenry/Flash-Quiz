import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../../../actions/flashcard/addFlashcard";
import "./AddFlashcard.css";
import { Redirect } from "react-router-dom";

function AddFlashcard(props) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(props.location.state);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [click, setClick] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  function checkParams() {
    const passing =
      question !== "" &&
      incorrectAnswers[0] !== "" &&
      option2 !== "" &&
      option3 !== "" &&
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
      <div className={`form ${click ? "flip" : ""}`}>
        <form onSubmit={handleSubmit}>
          <div className="front">
            <h4>Card Front</h4>
            <label type="select">
              Select a category:
              <select
                defaultValue={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={category} disabled>
                  Category
                </option>
                <option value="Reactjs">ReactJS</option>
                <option value="Redux">Redux</option>
                <option value="Ruby">Ruby</option>
                <option value="Math">Math</option>
              </select>
            </label>
            <label
              type="text"
              name="question"
              onChange={(e) => setQuestion(e.target.value)}
            >
              <textarea placeholder="Enter Question" />
            </label>
            <label
              className="form-incorrect-answer"
              type="text"
              name="incorrect-answer-1"
              onChange={(e) => setIncorrectAnswers([e.target.value])}
            >
              <textarea placeholder="Enter incorrect answer" />
            </label>
            <label
              className="form-incorrect-answer"
              type="text"
              name="incorrect-answer-2"
              onChange={(e) => setOption2(e.target.value)}
            >
              <textarea placeholder="Enter incorrect answer" />
            </label>
            <label
              className="form-incorrect-answer"
              type="text"
              name="incorrect-answer-3"
              onChange={(e) => setOption3(e.target.value)}
            >
              <textarea placeholder="Enter incorrect answer" />
            </label>
            <p>Please fill card front</p>
            <button
              type="button"
              className="btn-back-of-card"
              onClick={() => setClick(!click)}
            >
              Click to flip to back
            </button>
            {checkParams()}
          </div>
          <div className="back">
            <h4>Card Back</h4>
            <label
              className="form-correct-answer"
              type="text"
              name="correct-answer"
              onChange={(e) => setCorrectAnswer(e.target.value)}
            >
              <textarea placeholder="Enter Answer" />
            </label>
            <button
              type="button"
              className="btn-back-of-card"
              onClick={() => setClick(!click)}
            >
              Click to flip to front
            </button>
            {checkParams()}
            {submitted && <Redirect to="/" />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFlashcard;
