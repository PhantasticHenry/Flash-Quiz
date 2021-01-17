import * as types from "../actionTypes";

export const addFlashcard = (flashcard) => {
  return (dispatch) => {
    fetch(types.api + "flashcards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flashcard,
      }),
    })
      .then((res) => res.json())
      .then((flashcard) => {
        flashcard.error
          ? alert(flashcard.details)
          : dispatch({ type: types.ADD_FLASHCARD, payload: flashcard });
      })
      .catch((err) => console.log("Error", err));
  };
};
