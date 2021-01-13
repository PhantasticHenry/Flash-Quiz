import * as types from "../actionTypes";

export const getQuiz = (quizID) => {
  return (dispatch) => {
    fetch(types.api + `quizzes/${quizID}`)
      .then((res) => res.json())
      .then((quiz) => dispatch({ type: types.FETCH_QUIZ, payload: quiz }));
  };
};
