import React from "react";
import UserInput from "./UserInput";
import SelectCategoryDropdown from "./SelectCategoryDropdown";
import FlipButton from "./FlipButton";

function CardFront({
  categoryProp,
  setCategory,
  setQuestion,
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setClick,
  click,
  checkParams,
}) {
  return (
    <div className="front">
      <h4>Card Front</h4>
      <SelectCategoryDropdown
        categoryProp={categoryProp}
        setCategory={setCategory}
      />
      <UserInput
        setInput={setQuestion}
        htmlFor="question"
        name="question"
        placeholder={"Enter Question"}
      />
      <UserInput
        setInput={setAnswer1}
        htmlFor="incorect-answer-1"
        name="incorrect-answer-1"
        placeholder="Enter incorrect answer"
      />
      <UserInput
        setInput={setAnswer2}
        className="form-incorrect-answer"
        htmlFor="incorrect-answer-2"
        name="incorrect-answer-2"
        placeholder="Enter incorrect answer"
      />
      <UserInput
        setInput={setAnswer3}
        className="form-incorrect-answer"
        htmlFor="incorrect-answer-3"
        name="incorrect-answer-3"
        placeholder="Enter incorrect answer"
      />
      <p>Please fill card front</p>
      <FlipButton setClick={setClick} click={click} />
      {checkParams()}
    </div>
  );
}

export default CardFront;
