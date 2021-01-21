export const flashcardReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FLASHCARDS":
      return action.payload;

    case "ADD_FLASHCARD":
      return [...state, action.payload];
    default:
      return state;
  }
};
