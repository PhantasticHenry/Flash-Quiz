import React from "react";

function FlipButton({ setClick, click }) {
  return (
    <button
      type="button"
      className="btn-back-of-card"
      onClick={() => setClick(!click)}
    >
      {click ? "Click to flip to front" : "Click to flip to back"}
    </button>
  );
}

export default FlipButton;
