import React from "react";

function RemoveButton({ handleRemove }) {
  return (
    <button className="remove-btn" onClick={() => handleRemove()}>
      Remove Flashcard
    </button>
  );
}

export default RemoveButton;
