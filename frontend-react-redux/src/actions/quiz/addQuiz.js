import * as types from "../actionTypes";

export const addQuiz = (quiz) => {
  return (dispatch) => {
    fetch(types.api + "quizzes"),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quiz: {
            player: quiz.player,
            highScore: quiz.high_score,
            category: quiz.category,
          },
        })
          .then((res) => res.json())
          .then((quiz) => {
            if (quiz.error) {
              alert(quiz.details);
            } else {
              dispatch({ type: types.ADD_QUIZ, payload: quiz });
            }
          })
          .catch(console.log("**ERROR**", quiz.error)),
      };
  };
};
