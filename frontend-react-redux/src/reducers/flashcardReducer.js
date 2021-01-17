export const flashcardReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FLASHCARDS":
      return action.payload;

    case "ADD_FLASHCARD":
      return [...flashcards, action.payload];
    default:
      return state;
  }
};
