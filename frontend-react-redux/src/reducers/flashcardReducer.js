export const flashcardReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FLASHCARDS":
      return action.payload;

    case "ADD_FLASHCARD":
      return [...state, action.payload];

    case "EDIT_FLASHCARD": {
      const {
        id,
        category,
        question,
        correct_answer,
        incorrect_answers,
      } = action.payload;

      const existingFlashcard = state.filter(
        (flashcard) => flashcard.id === id
      );

      const updatedFlashcard = {
        ...existingFlashcard,
        id: id,
        category: category,
        question: question,
        correct_answer: correct_answer,
        incorrect_answers: incorrect_answers,
      };

      const newState = [...state.filter((flashcard) => flashcard.id !== id)];
      return [...newState, updatedFlashcard];
    }
    case "REMOVE_FLASHCARD": {
      return state.filter((flashcard) => flashcard.id !== action.payload);
    }

    default:
      return state;
  }
};
