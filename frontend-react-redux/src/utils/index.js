export function shuffleArray(answers) {
  let n = answers.length - 1;
  for (; n > 0; n--) {
    const j = Math.floor(Math.random() * (n + 1));
    const temp = answers[n];
    answers[n] = answers[j];
    answers[j] = temp;
  }
  return answers;
}

export function renderSwitch(path, id) {
  switch (path) {
    case "Flashcards":
      return "/flashcards";
    case "Start Quiz":
      return `/quizzes/${id}`;
    case "Add Flashcard":
      return "/add-flashcard";
    case "Edit Flashcard":
      return "/edit-flashcard";
    default:
      return "/";
  }
}
