import * as types from "../actionTypes";

export const startQuiz = (quiz) => {
  return (dispatch) => {
    return fetch(types.api + "quizzes", {
      method: "POST",
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
          : dispatch({ type: types.START_QUIZ, payload: quiz });
      })
      .catch((err) => console.log("ERROR: ", err));
  };
};
