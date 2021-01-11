import * as types from "../actionTypes";

export const getFlashcards = () => {
  return (dispatch) => {
    fetch(types.api + "flashcards")
      .then((res) => res.json())
      .then((flashcards) =>
        dispatch({ type: types.FETCH_FLASHCARDS, payload: flashcards })
      )
      .catch((error) => {
        console.log("**ERROR**", error);
      });
  };
};
