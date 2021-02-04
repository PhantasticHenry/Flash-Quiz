import { combineReducers } from "redux";
import { flashcardReducer as flashcards } from "./flashcardReducer";
import { quizReducer as quizzes } from "./quizReducer";
import { quizFlashcardReducer as quizFlashcards } from "./quizFlashcardReducer";
import { categoryReducer as category } from "./categoryReducer";

export const rootReducer = combineReducers({
  flashcards,
  quizzes,
  quizFlashcards,
  category,
});
