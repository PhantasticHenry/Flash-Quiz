import * as types from "../actionTypes";

export const removeFlashcard = ({ id }) => {
  return (dispatch) => {
    fetch(types.api + `flashcards/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => res.json())
      .then((flashcard) => {
        flashcard.error
          ? console.log("Error: ", flashcard.error)
          : dispatch({ type: types.REMOVE_FLASHCARD, payload: id });
      });
  };
};
