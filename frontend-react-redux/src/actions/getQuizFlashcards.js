import * as types from "./actionTypes";

const quizFlashcardsAPI = "http://localhost:3000/quiz_flashcards";

export const getQuizFlashcards = () => {
  return (dispatch) => {
    fetch(quizFlashcardsAPI)
      .then((res) => res.json())
      .then((quizFlashcards) =>
        dispatch({ type: types.FETCH_QUIZ_FLASHCARDS, payload: quizFlashcards })
      )
      .catch((err) => alert(err));
  };
};
