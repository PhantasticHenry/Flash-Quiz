import * as types from "../actionTypes";

const quizAPI = "http://localhost:3000/quizzes";
export const getQuizzes = () => {
  return (dispatch) => {
    fetch(quizAPI)
      .then((res) => res.json())
      .then((quizzes) =>
        dispatch({ type: types.FETCH_QUIZZES, payload: quizzes })
      );
  };
};
