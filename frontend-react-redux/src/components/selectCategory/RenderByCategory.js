import React from "react";
import { Redirect } from "react-router-dom";
import { renderSwitch } from "../../utils";

function RenderByCategory({ path, handleClick, category, quizzes }) {
  return (
    <Redirect
      to={{
        pathname: renderSwitch(path, quizzes.length + 1),
        category: category,
      }}
      onClick={handleClick}
    />
  );
}

export default RenderByCategory;
