import React from "react";

function InputQuestion({ setFlashcard, flashcard }) {
  return (
    <label
      htmlFor="question"
      type="text"
      name="question"
      onChange={(e) => setFlashcard({ ...flashcard, question: e.target.value })}
    >
      <textarea placeholder="Enter Question" />
    </label>
  );
}

export default InputQuestion;
