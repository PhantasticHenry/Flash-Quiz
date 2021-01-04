import { combineReducers } from "redux";
import { flashcardReducer as flashcards } from "./flashcardReducer";
import { quizReducer as quizzes } from "./quizReducer";

export const rootReducer = combineReducers({
  flashcards,
  quizzes,
});
