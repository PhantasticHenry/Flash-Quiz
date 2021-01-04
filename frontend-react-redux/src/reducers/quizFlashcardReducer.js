export const quizFlashcardReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_QUIZ_FLASHCARDS":
      return action.payload;
    default:
      return state;
  }
};
