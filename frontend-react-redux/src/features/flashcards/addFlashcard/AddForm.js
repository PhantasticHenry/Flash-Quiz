import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

function AddForm({
  click,
  handleSubmit,
  categoryProp,
  setCategory,
  setQuestion,
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setClick,
  checkParams,
  setCorrectAnswer,
  submitted,
}) {
  return (
    // <div className={`form ${click ? "flip" : ""}`}>
    <form onSubmit={handleSubmit} className={`form ${click ? "flip" : ""}`}>
      <CardFront
        categoryProp={categoryProp}
        setCategory={setCategory}
        setQuestion={setQuestion}
        setAnswer1={setAnswer1}
        setAnswer2={setAnswer2}
        setAnswer3={setAnswer3}
        setClick={setClick}
        click={click}
        checkParams={checkParams}
      />
      <CardBack
        setCorrectAnswer={setCorrectAnswer}
        setClick={setClick}
        click={click}
        checkParams={checkParams}
        submitted={submitted}
      />
    </form>
    // </div>
  );
}

export default AddForm;
