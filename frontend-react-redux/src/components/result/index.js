import React from "react";

function Result({ correct, incorrect }) {
  return (
    <div>
      Awesome! You answered {correct} correctly and {incorrect} incorrectly out
      of {correct + incorrect} total quesitons.
    </div>
  );
}

export default Result;
