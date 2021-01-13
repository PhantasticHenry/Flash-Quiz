export const quizReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_QUIZZES":
      return action.payload;

    case "FETCH_QUIZ":
      return action.payload;

    case "START_QUIZ":
      return [...state, action.payload];

    case "UPDATE_QUIZ":
      return [...state, action.payload];

    default:
      return state;
  }
};
