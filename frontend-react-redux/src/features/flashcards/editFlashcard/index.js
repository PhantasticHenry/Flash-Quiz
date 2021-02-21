import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../addFlashcard/AddFlashcard.css";
import { editFlashcard } from "../../../actions/flashcard/editFlashcard";
import SelectCategoryDropdown from "../addFlashcard/SelectCategoryDropdown";
import FlipButton from "../addFlashcard/FlipButton";
import UserInput from "../addFlashcard/UserInput";

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
  const [incorrectAnswers] = useState(incorrect_answers);
  const [answer1, setAnswer1] = useState(incorrectAnswers[0]);
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [click, setClick] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const incorrect_answers = [answer1, answer2, answer3];
    const updatedFlashcard = {
      id: id,
      category: updateCategory,
      question: updateQuestion,
      correct_answer: updateCorrectAnswer,
      incorrect_answers: incorrect_answers,
    };
    console.log("***", updatedFlashcard);
    dispatch(editFlashcard(updatedFlashcard));
    setSubmitted(true);
  };

  return (
    <div className="edit-container">
      <form className={`form ${click ? "flip" : ""}`} onSubmit={handleSubmit}>
        <div className="front">
          <h4>Card Front</h4>
          <SelectCategoryDropdown
            categoryProp={updateCategory}
            setCategory={setUpdateCategory}
          />
          <span>Question</span>
          <UserInput
            type="text"
            name="question"
            value={updateQuestion}
            setInput={setUpdateQuestion}
            placeholder={question}
          />
          <span>Incorrect answers</span>
          <UserInput
            className="form-incorrect-answer"
            type="text"
            name="incorrect-answer-1"
            setInput={setAnswer1}
            placeholder={incorrect_answers[0]}
          />
          <UserInput
            className="form-incorrect-answer"
            name="incorrect-answer-2"
            value={incorrectAnswers[1]}
            setInput={setAnswer2}
            placeholder={incorrect_answers[1]}
          />
          <UserInput
            className="form-incorrect-answer"
            type="text"
            name="incorrect-answer-3"
            value={incorrectAnswers[2]}
            setInput={setAnswer3}
            placeholder={incorrect_answers[2]}
          />
          <p>Please update card front</p>
          <FlipButton setClick={setClick} click={click} />
        </div>
        <div className="back">
          <h4>Card Back</h4>
          <span>Correct Answer</span>
          <UserInput
            className="form-correct-answer"
            type="text"
            name="correct-answer"
            value={updateCorrectAnswer}
            setInput={setUpdateCorrectAnswer}
            placeholder={correct_answer}
          />
          <FlipButton setClick={setClick} click={click} />
          <input type="submit" value="Update Flashcard" />
          {submitted && <Redirect to="/" />}
        </div>
      </form>
    </div>
  );
}

export default EditFlashcard;
