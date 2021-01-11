import * as types from "./actionTypes";

export const getQuizFlashcards = (quizID) => {
  return (dispatch) => {
    fetch(types.api + "quiz_flashcards")
      .then((res) => res.json())
      .then((quizFlashcards) =>
        dispatch({
          type: types.FETCH_QUIZ_FLASHCARDS,
          payload: quizFlashcards.filter(
            (flashcard) => flashcard.quiz_id === quizID
          ),
        })
      )
      .catch((err) => console.log("ERROR: ", err));
  };
};
