import { combineReducers } from "redux";
import { flashcardReducer as flashcard } from "./flashcardReducer";
import { quizReducer as quiz } from "./quizReducer";

export const rootReducer = combineReducers({
  flashcard,
  quiz,
});
