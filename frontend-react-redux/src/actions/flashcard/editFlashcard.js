import * as types from "../actionTypes";

export const editFlashcard = (flashcard) => {
  return (dispatch) => {
    fetch(types.api + `flashcards/${flashcard}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flashcard,
      }),
    })
      .then((res) => res.json())
      .then((flashcard) => {
        flashcard.error
          ? alert(flashcard.error)
          : dispatch({ type: types.EDIT_FLASHCARD, payload: flashcard });
      })
      .catch((err) => console.log("****", err));
  };
};
