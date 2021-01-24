export const DropdownItems = [
  {
    title: "Add Flashcard",
    path: "/add-flashcard",
    cName: "dropdown-link",
  },
  {
    title: "Edit Flashcard",
    path: "/edit-flashcard",
    cName: "dropdown-link",
  },
  {
    title: "Remove Flashcard",
    path: "/remove-flashcard",
    cName: "dropdown-link",
  },
];

export function renderSwitch(path) {
  switch (path) {
    case "Flashcards":
      return "/flashcards";
    case "Start Quiz":
      return "/start-quiz";
    case "Add Flashcard":
      return "/add-flashcard";
    case "Edit Flashcard":
      return "/edit-flashcard";
    default:
      return "/";
  }
}
