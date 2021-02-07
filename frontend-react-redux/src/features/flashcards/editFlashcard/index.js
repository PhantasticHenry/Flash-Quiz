import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../addFlashcard/AddFlashcard.css";
import { editFlashcard } from "../../../actions/flashcard/editFlashcard";

function EditFlashcard(props) {
  const dispatch = useDispatch();
  const { flashcard } = props.location.state;
  const {
    id,
    category,
    question,
    correct_answer,
    incorrect_answers,
  } = flashcard;
  const [updateCategory, setUpdateCategory] = useState(category);
  const [updateQuestion, setUpdateQuestion] = useState(question);
  const [updateCorrectAnswer, setUpdateCorrectAnswer] = useState(
    correct_answer
  );
  const [incorrectAnswers, setIncorrectAnswers] = useState(incorrect_answers);
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [click, setClick] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateIncorrect_answers = [...incorrectAnswers, option2, option3];
    const updatedFlashcard = {
      id: id,
      category: updateCategory,
      question: updateQuestion,
      correct_answer: updateCorrectAnswer,
      incorrect_answers: updateIncorrect_answers,
    };
    dispatch(editFlashcard(updatedFlashcard));
    setSubmitted(true);
  };

  return (
    <div className="edit-container">
      <div className={`form ${click ? "flip" : ""}`}>
        <form onSubmit={handleSubmit}>
          <div className="front">
            <h4>Card Front</h4>
            <label type="select">
              Pick a category:
              <select
                value={updateCategory}
                onChange={(e) => setUpdateCategory(e.target.value)}
              >
                <option value="Reactjs">ReactJS</option>
                <option value="Redux">Redux</option>
                <option value="Ruby">Ruby</option>
                <option value="Math">Math</option>
              </select>
            </label>
            <span>Question</span>
            <label
              type="text"
              name="question"
              value={updateQuestion}
              onChange={(e) => setUpdateQuestion(e.target.value)}
            >
              <textarea placeholder={question} />
            </label>
            <span>Incorrect answers</span>
            <label
              className="form-incorrect-answer"
              type="text"
              name="incorrect-answer-1"
              value={incorrectAnswers[0]}
              onChange={(e) => setIncorrectAnswers([e.target.value])}
            >
              <textarea placeholder={incorrect_answers[0]} />
            </label>
            <label
              className="form-incorrect-answer"
              type="text"
              name="incorrect-answer-2"
              value={incorrectAnswers[1]}
              onChange={(e) => setOption2(e.target.value)}
            >
              <textarea placeholder={incorrect_answers[1]} />
            </label>
            <label
              className="form-incorrect-answer"
              type="text"
              name="incorrect-answer-3"
              value={incorrectAnswers[2]}
              onChange={(e) => setOption3(e.target.value)}
            >
              <textarea placeholder={incorrect_answers[2]} />
            </label>
            <p>Please update card front</p>
            <button
              type="button"
              className="btn-back-of-card"
              onClick={() => setClick(!click)}
            >
              Click to flip to back
            </button>
          </div>
          <div className="back">
            <h4>Card Back</h4>
            <span>Correct Answer</span>
            <label
              className="form-correct-answer"
              type="text"
              name="correct-answer"
              value={updateCorrectAnswer}
              onChange={(e) => setUpdateCorrectAnswer(e.target.value)}
            >
              <textarea placeholder={correct_answer} />
            </label>
            <button
              type="button"
              className="btn-back-of-card"
              onClick={() => setClick(!click)}
            >
              Click to flip to front
            </button>
            {/* {checkParams()} */}
            <input type="submit" value="Create Flashcard" />
            {submitted && <Redirect to="/" />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFlashcard;
