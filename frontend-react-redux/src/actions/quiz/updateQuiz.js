import * as types from "../actionTypes";

export const updateQuiz = (quizID, quiz) => {
  return (dispatch) => {
    fetch(types.api + `quizzes/${quizID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quiz: {
          player: quiz.player,
          high_score: quiz.high_score,
          category: quiz.category,
        },
      }),
    })
      .then((res) => res.json())
      .then((quiz) => {
        quiz.error
          ? alert(quiz.details)
          : dispatch({ type: types.UPDATE_QUIZ, payload: quiz });
      })
      .catch((err) => console.log("Error: ", err));
  };
};
