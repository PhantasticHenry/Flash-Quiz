export const flashcardReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FLASHCARDS":
      return action.payload;
    default:
      return state;
  }
};
