import { useState } from "react";

export function useShuffleArray(array) {
  const [answers] = useState(array);
  let n = answers.length - 1;
  for (; n > 0; n--) {
    const j = Math.floor(Math.random() * (n + 1));
    const temp = answers[n];
    answers[n] = answers[j];
    answers[j] = temp;
  }
  return answers;
}
